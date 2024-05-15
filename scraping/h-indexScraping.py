from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
import pandas as pd;


service = Service(executable_path='INSERT DRIVER PATH')

chromedriver_path = 'INSERT DRIVER PATH'

driver = webdriver.Chrome(service=service)
#OK STATE
#chemistry faculty
wait = WebDriverWait(driver, 10)  # Adjust the time according to your needs
url = 'https://cas.okstate.edu/department_of_chemistry/faculty/'
driver.get(url)

elements = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "teaser__link")))
faculty_names = []
for teaser_link in elements:
    # Scroll into view
    driver.execute_script("arguments[0].scrollIntoView(true);", teaser_link)
    # Wait for the element to be visible (may not be necessary if already using visibility_of_all_elements_located)
    wait.until(EC.visibility_of(teaser_link))
    
    # Extract the text and strip whitespace
    faculty_name = teaser_link.text.strip()
    if faculty_name:  # Make sure it's not empty
        faculty_names.append(faculty_name[4:])

#integrative biology faculty
url = 'https://integrativebiology.okstate.edu/people/faculty/all-faculty-2'
driver.get(url)
# Find elements by the CSS selector that matches the faculty name and title
elements = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, 'h2.article-title a')))

for elem in elements:
    # Assuming the name and title are structured similarly to the highlighted HTML
    name = elem.text
    faculty_names.append(name)


#microbiology faculty
url = 'https://microbiology.okstate.edu/people/faculty'
driver.get(url)
elements = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, 'div.item-content-box header h2.article-title a')))
for elem in elements:
    faculty_names.append(elem.get_attribute('title'))


#university of oklahoma
url = 'https://www.ou.edu/cas/biology/people/faculty'
driver.get(url)
faculty_elements = driver.find_elements(By.CSS_SELECTOR, 'a[href*="/faculty/"] b')
for element in faculty_elements:
    faculty_names.append(element.text)

url = 'https://www.uco.edu/cms/academics/biology/faculty-and-staff'
driver.get(url)
faculty_elements = driver.find_elements(By.CSS_SELECTOR, 'div[class*="content"] a')
for element in faculty_elements:
    faculty_names.append(element.text.split(',')[0])
df = pd.DataFrame(faculty_names, columns=['Name'])
df.to_excel('/Users/katherineli/Documents/OKC/OKC_faculty_names copy.xlsx', index=False, engine='openpyxl')
#get h-index

faculty_names = [name.split(' ') for name in faculty_names]
#driver = webdriver.Chrome(service=service)
options = Options()
options.headless = True
driver = webdriver.Chrome(options=options)
wait = WebDriverWait(driver, 15)
for name in faculty_names:
    url ="https://www.webofscience.com/wos/author/search"
    driver.get(url)
    elements = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, "button.onetrust-close-btn-handler")))
    elements[0].click
    first_name_input = wait.until(EC.element_to_be_clickable((By.ID, "mat-input-1")))
    #first_name_input = wait.until(EC.visibility_of_element_located((By.ID, "mat-input-1")))
    first_name_input.send_keys(name[0])
    last_name_field = driver.find_element(By.CSS_SELECTOR, 'input[formcontrolname="lastName"]')

    last_name_field.send_keys(name[1]) 
    id="pendo-close-guide-5600f670"
    
# Close the driver
 


driver.quit()

