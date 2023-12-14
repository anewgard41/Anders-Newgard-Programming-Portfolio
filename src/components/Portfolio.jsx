import { useState } from 'react';
import Project from './Project.jsx';

function Portfolio () {
    const [projects] = useState([
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
        }
    ]);

    return (
        <section>
            <h1>Portfolio</h1>
            <div>
                {projects.map((project, i) => (
                    <Project project={project} key={'project' + i} />
                ))}
            </div>
        </section>
    );
}


export default Portfolio;