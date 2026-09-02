export function projectsListHandler(){
    const projectsList = document.querySelector('.project-list');

    const projectsData = [
        {
            id: 'icyou',
            name: 'iCYOU: Instagram Analyzer',
            description: 'A website that analyzes your data to find non followers on your profile.',
            link: 'https://icyou.netlify.app/',
            thumbnail: '../assets/icyou-thumbnail.webp',
            previewImg: '../assets/icyou-preview.png',
            previewImgPhone: '../assets/icyou-preview-phone.jpg'
        },
        {
            id: 'MADISON_ATTORNEYS',
            name: 'MADISON ATTORNEYS',
            description: 'A law firm landing page mock designed to showcase services and attract potential clients.',
            link: 'https://madisonattorneys.netlify.app/',
            thumbnail: '../assets/MD-thumbnail.webp',
            previewImg: '../assets/MD-preview.webp',
            previewImgPhone: '../assets/MD-preview-phone.webp'
        },
        {
            id: 'gradex',
            name: 'GradeX: Grade Calculator',
            description: 'Calculator for students to get fast feedback on their grades, i.e. GPA, Grade Average, APS score, etc.',
            link: 'https://gradexcalc.netlify.app/',
            thumbnail: '../assets/gradex-thumbnail.webp',
            previewImg: '../assets/gradex-preview.png',
            previewImgPhone: '../assets/gradex-preview-phone.jpg'
        },
        {
            id: 'dentalz',
            name: 'Dentalz: Dental Services Landing Page',
            description: 'Minimalist dental landing page for a "made up" dental service clinic.',
            link: 'https://dentalzclinic.netlify.app/',
            thumbnail: '../assets/dentalz-thumbnail.webp',
            previewImg: '../assets/dentalz-preview.webp',
            previewImgPhone: '../assets/dentalz-preview-phone.webp'
        }
    ];

    let html = '';

    for (let i = 0; i < projectsData.length; i++){
        html = `
            <button class="project" data-btnid=${projectsData[i].id}>
                <div class="project-thumbnail">
                    <img src=${projectsData[i].thumbnail} alt="${projectsData[i].name} thumbnail" width="50" height="50">
                </div>
                <div class="thumbnail-title">
                    <p>${projectsData[i].name}</p>
                </div>
            </button>
        `;
        projectsList.innerHTML += html;
    }

    viewControl(projectsData);

}

function viewControl(projectsData){

    const projects = document.querySelectorAll('.project');
    const projectPreview = document.querySelector('.preview-image-container');
    const projectDesc = document.querySelector('.description-container');
    const projectLink = document.querySelector('.view-project-container');
    const projectName = document.querySelector('.viewer-project-title');
    const mobileQuery = window.matchMedia("(max-width: 760px)");

    // Track the currently selected project
    let currentProject = projectsData[0];

    // Helper function to update preview image based on screen size
    const updatePreviewImage = (projectObj) => {
        if (mobileQuery.matches){
            projectPreview.innerHTML = `
                <img src="./assets/${projectObj.previewImgPhone}" alt="${projectObj.name} preview" width="100" height="100">
            `;
        } else{
            projectPreview.innerHTML = `
                <img src="./assets/${projectObj.previewImg}" alt="${projectObj.name} preview" width="100" height="100">
            `;
        }
    };

    // Set initial preview
    updatePreviewImage(currentProject);

    // Listen for screen resize changes once (outside the click handler)
    mobileQuery.addEventListener('change', () => {
        updatePreviewImage(currentProject);
    });

    projects.forEach(project => {
        project.addEventListener('click',() => {
            const projectObj = projectsData.find(proj => proj.id === project.dataset.btnid);
            currentProject = projectObj; // Update the current project

            // Update preview immediately on click
            updatePreviewImage(projectObj);
            projectDesc.innerHTML = `
                <p class="description">${projectObj.description}</p>
            `;
            projectName.innerHTML=`<h2 class="project-desc-name">${projectObj.name}</h2>`
            projectLink.innerHTML =`
                <a href=${projectObj.link} class="view-project-btn"><span>View</span><img src="./assets/icons/external-link-svgrepo-com.svg" alt="External link icon" width="20" height="20"></a>
            `;
        });
    });
}