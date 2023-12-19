function Resume() {
    return (
        <div className="m-3">
            <h1>Resume</h1>
            <p>Here is a link to my <a href="https://o365coloradoedu-my.sharepoint.com/:w:/g/personal/anne9707_colorado_edu/EWaWQPzE-VJGkBWTvgbHxNMBhJI6YoZP9VzygtnwrZ2ndw?rtime=v5WgD3j_20g">resume</a></p>

            <section className="p-2">
                <h2>Want to skip skimming the resume? Here is a quick bullet list of my programming proficiencies.</h2>
                {/* Styling for list and headers */}
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Front End Proficiencies</h2>
                <ul className="text-white-500 list-disc list-inside">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>

                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Back End Proficiencies</h2>
                <ul className="text-white-500 list-disc list-inside">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>

            </section>
        </div>
    )
}

export default Resume;

