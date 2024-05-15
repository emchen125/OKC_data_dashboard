import re
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime, timedelta
import pandas as pd

# adjust date by 6 months
def add_six_months(orig_date):
    new_month = orig_date.month + 6 if orig_date.month <= 6 else orig_date.month - 6
    new_year = orig_date.year + (orig_date.month // 7)
    return orig_date.replace(year=new_year, month=new_month)

def get_phase_trials_data(phase_path):
    options = Options()
    options.add_argument('--ignore-ssl-errors=yes')
    options.add_argument('--ignore-certificate-errors')
    driver = webdriver.Chrome(options=options)

    start_date = datetime(2019, 1, 1)
    end_date = datetime(2024, 1, 1) 
    data = []

    while start_date < end_date:
        next_start_date = add_six_months(start_date)
        page_path = phase_path.format(start_date=start_date.strftime("%Y-%m-%d"), next_start_date=next_start_date.strftime("%Y-%m-%d"))
        driver.get(page_path)

        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, '//*[@id="searchResultsIntro"]/div/p')) 
        )

        page_source = driver.page_source
        pattern = "Viewing 1-10 out of (\d+) studies"
        match = re.search(pattern, page_source)
        if match:
            number_of_studies = match.group(1)
            data.append({
                "period_start_date": start_date.strftime('%Y-%m-%d'),
                "period_end_date": next_start_date.strftime('%Y-%m-%d'),
                "number_of_early_phase_trials": number_of_studies
            })
        start_date = next_start_date

    driver.quit()
    return data

early_phase_path = '&aggFilters=phase:0%201%202'
# URL for Oklahoma state 
# early_path = "https://clinicaltrials.gov/search?locStr=Oklahoma%20City,%20OK&country=United%20States&state=Oklahoma&city=Oklahoma%20City&start={start_date}_{next_start_date}"+early_phase_path
# URL for United States
early_path = "https://clinicaltrials.gov/search?country=United%20States&start={start_date}_{next_start_date}"+early_phase_path
early_data = get_phase_trials_data(early_path)
print(early_data)

late_phase_path = '&aggFilters=phase:3%204'
# URL for Oklahoma state 
# late_path = "https://clinicaltrials.gov/search?locStr=Oklahoma%20City,%20OK&country=United%20States&state=Oklahoma&city=Oklahoma%20City&start={start_date}_{next_start_date}"+late_phase_path
# URL for United States
late_path = "https://clinicaltrials.gov/search?country=United%20States&start={start_date}_{next_start_date}"+late_phase_path
late_data = get_phase_trials_data(late_path)
print(late_data)

early_df = pd.DataFrame(early_data)
late_df = pd.DataFrame(late_data)

# save the DataFrame to a CSV file
early_df.to_csv('early_phase_trials_data_US.csv', index=False)
late_df.to_csv('late_phase_trials_data_US.csv', index=False)
