import React, { useEffect, useRef } from 'react';
import '../viz.css';
const { tableau } = window;

export function Grants() {
    var viz;
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/OKC_17156240996690_17265903180560/Dashboard10?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
    const initViz = () => {
        if (viz) {
            viz.dispose();
        }
        viz = new tableau.Viz(ref.current, url, { width: "100%", height: "90vh" });
    }

    useEffect(initViz, []);
    return <div ref={ref} />

}

export default Grants;
