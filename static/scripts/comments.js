//Fetch data from data.js

const startApp = () => {
fetch('../static/db/data.js')
.then(response => response.json())
.then(data => renderSections(data))
.catch(err => console.log(err));
}

//Creates each section of a course by using tha data fetched

const renderSections = data => {
    console.log("started");
    document.getElementById('courseName').innerText = data[0].courseName;
    document.getElementById('courseImage').src = data[0].img;
    
    //Loop to create sections
    for(let i = 0; i < data.length; i++) {

        const section = data[i];
        
        const newSection = document.createElement('div');
        
        const main = document.getElementById('main');
        main.appendChild(newSection);

        const space = document.createElement('br')
        main.appendChild(space)
        

        //Section name
        const sectionHeader = document.createElement('a');
        sectionHeader.href = section.href;
        sectionHeader.dataset.toggle = "collapse";
        sectionHeader.className = "section-headers";
        sectionHeader.innerText = section.header;

        newSection.appendChild(sectionHeader);

        const collapsePanel = document.createElement('div');
        collapsePanel.id = section.id;
        collapsePanel.className = "collapse panel panel-default";

        newSection.appendChild(collapsePanel);

        const panelBody = document.createElement('div');
        panelBody.className = "panel-body";

        collapsePanel.appendChild(panelBody);

        //Relevance part
        const relevanceHeader = document.createElement('h4');
        relevanceHeader.innerText = "Relevance";

        panelBody.appendChild(relevanceHeader);

        const panelDefault = document.createElement('div');
        panelDefault.className = "panel panel-default";

        panelBody.appendChild(panelDefault);

        const relevanceText = document.createElement('div');
        relevanceText.className = "panel-body";
        relevanceText.innerText = section.rel;

        panelDefault.appendChild(relevanceText);

        const commentsHeader = document.createElement('h4');
        commentsHeader.innerText = "Comments";

        panelBody.appendChild(commentsHeader);

        //Create four comments for each section
        for(let j = 0; j < 4; j++) {
            
            const names = ["Emrah", "Kemal", "Ahmet", "Stefan"]
            
            const commentsPanelDefault = document.createElement('div');
            commentsPanelDefault.className = "panel panel-default";
            commentsPanelDefault.style = "margin-top:20px"

            panelBody.appendChild(commentsPanelDefault);

            const commentsPanelBody = document.createElement('div');
            commentsPanelBody.className = 'panel-body';

            commentsPanelDefault.appendChild(commentsPanelBody);

            const commentsRowMb = document.createElement('div');
            commentsRowMb.className = "row  mb-2";

            commentsPanelBody.appendChild(commentsRowMb);

            const commentsColSm = document.createElement('div');
            commentsColSm.className = "col-sm-2 col-3 text-center user-img"

            commentsRowMb.appendChild(commentsColSm);

            const commentsImg = document.createElement('IMG');
            commentsImg.id = "profile-photo";
            commentsImg.src = "../static/images/" + names[j] + ".jpg";
            commentsImg.alt = "userImage";
            commentsImg.className = "img-responsive rounded-circle";
            commentsImg.style = "max-height: 90px; max-width: 90px";

            commentsColSm.appendChild(commentsImg);

            const commentsColMd = document.createElement('div');
            commentsColMd.className = "col-md-9 col-sm-9 col-9  rounded mb-2"

            commentsRowMb.appendChild(commentsColMd);

            const commentUser = document.createElement('h4');
            commentUser.className = "m-0"
            commentUser.innerText = names[j];

            commentsColMd.appendChild(commentUser);

            const commentSpace = document.createElement('br')

            commentsColMd.appendChild(commentSpace);

            const commentText = document.createElement('p');
            commentText.className = "mb-0 text-black";            
            commentText.innerText = section[j];
            
            commentsColMd.appendChild(commentText);
            
        }
        
    }
    
}

startApp();

