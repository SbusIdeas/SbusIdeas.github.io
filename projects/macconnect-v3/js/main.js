const documents = document.querySelector(".documents"),
    posts = [
        {
            imageDirectoryName: "310524-1",
            heading: "CV Writing Memorandum: 31 May 2024"
        },
        {
            imageDirectoryName: "300524-1",
            heading: "Human Capital Workforce Infographic: 30 May 2024"
        },
        {
            imageDirectoryName: "160524-1",
            heading: "The Art of Finding Light Despite Dark Times: 16 May 2024"
        },
        {
            imageDirectoryName: "090524-1",
            heading: "Enter The Eric Samson Awards: 09 May 2024"
        },
        {
            imageDirectoryName: "180424-1",
            heading: "Becoming The Master Of Disaster: 18 April 2024"
        },
        {
            imageDirectoryName: "110424-1",
            heading: "Goals and Objectives: 11 April 2024"
        },
        {
            imageDirectoryName: "050424-1",
            heading: "Snapshot Edition: 05 April 2024"
        },
    ];



for (let i=0; i<posts.length; i++) {
    addDocument(posts[i])
}

function addDocument(obj) {
    const documentContainer = document.createElement("div"),
        img = document.createElement("img"),
        description = document.createElement("h3"),
        documentLink =document.createElement("a");

    // Link attributes
    documentLink.setAttribute("target", "_blank");
    documentLink.setAttribute("href", `pdfs/${obj.imageDirectoryName}.pdf`)

    // image attribute
    img.className = "document-img";
    img.setAttribute("src", `images/${obj.imageDirectoryName}/page_1.png`);
    img.setAttribute("alt", obj.imageDirectoryName);

    // Description attributes
    description.innerText = obj.heading;

    // Container attributes
    documentContainer.className = "document-container";

    // Adding attributes to document container
    documentLink.appendChild(img);
    documentLink.appendChild(description);
    documentContainer.appendChild(documentLink);

    documents.appendChild(documentContainer);
}