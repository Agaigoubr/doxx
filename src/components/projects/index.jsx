'use client';
import { useState } from 'react';
import styles from './style.module.scss';
import Titles from './titles';
import Descriptions from './descriptions';

const data = [
    {
        title: "Next.js",
        description: "tailwindcss sass tapingscript javascript html react.js vu.js animsion-fram",
        speed: 0.5
    },
    {
        title: "laravel",
        description: "Developed backend php vite  fronend tailailwindcss bootstrap ",
        speed: 0.5
    },
    {
        title: "tailwindcss",
        description: "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
        speed: 0.67
    },
    {
        title: "Sass",
        description: "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
        speed: 0.8
    },
    {
        title: "animsion",
        description: "::::::::::::::::::::::::::::",
        speed: 0.8
    },
    {
        title: "3d",
        description: "..................................",
        speed: 0.8
    }
]

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)
    return (
        <div className={styles.container}>
            <Titles data={data} setSelectedProject={setSelectedProject}/>
            <Descriptions data={data} selectedProject={selectedProject}/>
        </div>
    )
}

