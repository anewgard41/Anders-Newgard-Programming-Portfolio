import { useState } from 'react';
import Project from './Project.jsx';

function Portfolio() {
    const [projects] = useState([
        // Providing the name, description, and link for each project object
        {
            name: 'TrailBuddy Trail Finder and Experiences',
            description: 'Find trails near you and share your hiking experiences!',
            link: "https://trail-buddy-cary-nc-4eb34ba4009f.herokuapp.com/"
        },
        {
            name: 'Flavorful Finds Recipe Finder',
            description: 'Search for recipes by ingredient and save your favorites!',
            link: "https://anewgard41.github.io/Flavor-Finds-Recipe-Finder/"
        },
        {
            name: 'Weather Dashboard',
            description: 'Weather dashboard that displays current weather and 5 day forecast.',
            link: "https://anewgard41.github.io/Weather-Dashboard-App/"
        },
        {
            name: 'TechCorner Blog',
            description: 'Share your tech experiences and read about others!',
            link: "https://tech-corner-blog-1cafda2ed479.herokuapp.com/"
        },
        {
            name: 'Installable Text Editor',
            description: 'Text editor that can be installed on your computer!',
            link: "https://installable-text-editor-with-webpack.onrender.com/"
        },
        {
            name: 'Simple Note Taker',
            description: 'An alternative note taker that saves your notes for later! Only available in a browser.',
            link: "https://whispering-journey-91261-71280760acc3.herokuapp.com/"
        },
    ]);

    return (
        <section className='p-4 my-8'>
            <h1 className='font-bold mb-4'>Portfolio</h1>
            {/* using columns for responsiveness on this page */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {/* mapping each project */}
                {projects.map((project, i) => (
                    <Project project={project} key={'project' + i} />
                ))}
            </div>
        </section>
    );
}


export default Portfolio;