import React, { useEffect, useRef } from 'react';
import '../viz.css';
const { tableau } = window;

export function ProdViz() {
    var viz;
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/productivity_17265991589950/productivity?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

    const initViz = () => {
        if (viz) {
            viz.dispose();
        }
        viz = new tableau.Viz(ref.current, url, { width: "100%", height: "90vh" });
    }

    useEffect(initViz, []);
    return <div ref={ref} />

}

export default ProdViz;
