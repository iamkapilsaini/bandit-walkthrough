/* =========================================================
   BANDIT WALKTHROUGH
   Main JavaScript
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const TOTAL_LEVELS = 33;


/*
    Change this number to the number of levels
    you have actually completed.

    Example:

    18 means you have completed Level 0 → Level 18.
*/

const COMPLETED_LEVELS = 33;


/*
    Level file names.

    Level 0 uses:

        levels/level-00.md

    Level 1 uses:

        levels/level-01.md

    etc.
*/

const levels = [];


for (let i = 0; i < TOTAL_LEVELS; i++) {

    levels.push({
        id: i,

        file:
            `levels/level-${String(i).padStart(2, "0")}.md`,

        title:
            `Level ${i}`,

        transition:
            i < 33
                ? `${i} → ${i + 1}`
                : `Level ${i}`
    });

}


/* =========================================================
   STATE
========================================================= */

let currentLevel = null;


/* =========================================================
   DOM ELEMENTS
========================================================= */

const levelList =
    document.getElementById("levelList");

const content =
    document.getElementById("content");

const previousButton =
    document.getElementById("previousButton");

const nextButton =
    document.getElementById("nextButton");

const previousText =
    document.getElementById("previousText");

const nextText =
    document.getElementById("nextText");

const searchInput =
    document.getElementById("levelSearch");

const progressText =
    document.getElementById("progressText");

const progressFill =
    document.getElementById("progressFill");

const navigation =
    document.getElementById("navigation");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileClose =
    document.getElementById("mobileClose");

const sidebar =
    document.querySelector(".sidebar");


/* =========================================================
   CREATE SIDEBAR
========================================================= */

function createLevelList(filter = "") {

    levelList.innerHTML = "";

    const search =
        filter.trim().toLowerCase();


    levels.forEach(level => {

        const searchableText =
            `${level.title} ${level.transition}`
                .toLowerCase();


        if (
            search &&
            !searchableText.includes(search)
        ) {
            return;
        }


        const button =
            document.createElement("button");


        button.className =
            "level-item";


        button.dataset.level =
            level.id;


        /*
            Completed indicator.
        */

        if (level.id < COMPLETED_LEVELS) {

            button.classList.add("completed");

        }


        button.innerHTML = `

            <span class="level-number">
                ${String(level.id).padStart(2, "0")}
            </span>

            <span>
                ${level.id < 33
                    ? `Level ${level.id} → ${level.id + 1}`
                    : `Level ${level.id}`}
            </span>

            <span class="level-status">
                ${level.id < COMPLETED_LEVELS
                    ? "✓"
                    : ""}
            </span>

        `;


        button.addEventListener(
            "click",
            () => loadLevel(level.id)
        );


        levelList.appendChild(button);

    });


    updateActiveLevel();

}


/* =========================================================
   UPDATE ACTIVE LEVEL
========================================================= */

function updateActiveLevel() {

    const items =
        document.querySelectorAll(".level-item");


    items.forEach(item => {

        const id =
            Number(item.dataset.level);


        item.classList.toggle(
            "active",
            id === currentLevel
        );

    });

}


/* =========================================================
   LOAD LEVEL
========================================================= */

async function loadLevel(levelNumber) {

    const level =
        levels[levelNumber];


    if (!level) {
        return;
    }


    currentLevel =
        levelNumber;


    /*
        Update URL.

        Example:

        index.html#level-05
    */

    history.replaceState(
        null,
        "",
        `#level-${String(levelNumber).padStart(2, "0")}`
    );


    updateActiveLevel();


    /*
        Scroll content to top.
    */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /*
        Show loading state.
    */

    content.innerHTML = `

        <div class="loading">
            Loading Level ${levelNumber}
        </div>

    `;


    /*
        Update navigation immediately.
    */

    updateNavigation();


    /*
        Close mobile sidebar.
    */

    sidebar.classList.remove("open");


    try {

        const response =
            await fetch(level.file);


        if (!response.ok) {

            throw new Error(
                `Could not load ${level.file}`
            );

        }


        const markdown =
            await response.text();


        /*
            Convert Markdown to HTML.
        */

        content.innerHTML =
            marked.parse(markdown);


        /*
            Add code highlighting.
        */

        highlightCode();


        /*
            Add copy buttons.
        */

        addCopyButtons();


        /*
            Add external-link behavior.
        */

        configureLinks();

    }

    catch (error) {

        console.error(error);


        content.innerHTML = `

            <div class="error-box">

                <strong>
                    ⚠ Unable to load this level
                </strong>

                <br><br>

                The file

                <code>
                    ${level.file}
                </code>

                could not be loaded.

                <br><br>

                Make sure the file exists in your
                <code>levels</code> folder.

            </div>

        `;

    }

}


/* =========================================================
   CODE HIGHLIGHTING
========================================================= */

function highlightCode() {

    const blocks =
        content.querySelectorAll("pre code");


    blocks.forEach(block => {

        /*
            Highlight.js automatically detects
            the language when no class is specified.
        */

        hljs.highlightElement(block);

    });

}


/* =========================================================
   COPY BUTTONS
========================================================= */

function addCopyButtons() {

    const codeBlocks =
        content.querySelectorAll("pre");


    codeBlocks.forEach(pre => {

        /*
            Prevent duplicate buttons.
        */

        if (
            pre.parentElement.classList.contains(
                "code-wrapper"
            )
        ) {
            return;
        }


        const wrapper =
            document.createElement("div");


        wrapper.className =
            "code-wrapper";


        pre.parentNode.insertBefore(
            wrapper,
            pre
        );


        wrapper.appendChild(pre);


        const button =
            document.createElement("button");


        button.className =
            "copy-button";


        button.textContent =
            "Copy";


        button.addEventListener(
            "click",
            async () => {

                const code =
                    pre.querySelector("code");


                if (!code) {
                    return;
                }


                try {

                    await navigator.clipboard.writeText(
                        code.innerText
                    );


                    button.textContent =
                        "Copied!";


                    button.classList.add(
                        "copied"
                    );


                    setTimeout(() => {

                        button.textContent =
                            "Copy";

                        button.classList.remove(
                            "copied"
                        );

                    }, 1500);

                }

                catch (error) {

                    console.error(
                        "Copy failed:",
                        error
                    );

                }

            }
        );


        wrapper.appendChild(button);

    });

}


/* =========================================================
   CONFIGURE LINKS
========================================================= */

function configureLinks() {

    const links =
        content.querySelectorAll("a");


    links.forEach(link => {

        /*
            External links open in a new tab.
        */

        if (
            link.hostname &&
            link.hostname !== window.location.hostname
        ) {

            link.target =
                "_blank";

            link.rel =
                "noopener noreferrer";

        }

    });

}


/* =========================================================
   PREVIOUS / NEXT
========================================================= */

function updateNavigation() {

    if (currentLevel === null) {

        navigation.style.display =
            "none";

        return;

    }


    navigation.style.display =
        "flex";


    /*
        Previous
    */

    if (currentLevel > 0) {

        previousButton.disabled =
            false;

        previousText.textContent =
            `Level ${currentLevel - 1}`;

    }

    else {

        previousButton.disabled =
            true;

        previousText.textContent =
            "No Previous Level";

    }


    /*
        Next
    */

    if (currentLevel < TOTAL_LEVELS - 1) {

        nextButton.disabled =
            false;

        nextText.textContent =
            `Level ${currentLevel + 1}`;

    }

    else {

        nextButton.disabled =
            true;

        nextText.textContent =
            "End of Walkthrough";

    }

}


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

previousButton.addEventListener(
    "click",
    () => {

        if (
            currentLevel !== null &&
            currentLevel > 0
        ) {

            loadLevel(
                currentLevel - 1
            );

        }

    }
);


/* =========================================================
   NEXT BUTTON
========================================================= */

nextButton.addEventListener(
    "click",
    () => {

        if (
            currentLevel !== null &&
            currentLevel < TOTAL_LEVELS - 1
        ) {

            loadLevel(
                currentLevel + 1
            );

        }

    }
);


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    event => {

        createLevelList(
            event.target.value
        );

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

mobileMenu.addEventListener(
    "click",
    () => {

        sidebar.classList.add("open");

    }
);


mobileClose.addEventListener(
    "click",
    () => {

        sidebar.classList.remove("open");

    }
);


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    const percentage =
        (COMPLETED_LEVELS / TOTAL_LEVELS) * 100;


    progressText.textContent =
        `${COMPLETED_LEVELS} / ${TOTAL_LEVELS}`;


    progressFill.style.width =
        `${percentage}%`;

}


/* =========================================================
   LOAD LEVEL FROM URL
========================================================= */

function loadLevelFromURL() {

    const hash =
        window.location.hash;


    if (!hash) {
        return;
    }


    const match =
        hash.match(
            /level-(\d+)/
        );


    if (!match) {
        return;
    }


    const levelNumber =
        Number(match[1]);


    if (
        levelNumber >= 0 &&
        levelNumber < TOTAL_LEVELS
    ) {

        loadLevel(levelNumber);

    }

}


/* =========================================================
   INITIALIZE
========================================================= */

function initialize() {

    createLevelList();

    updateProgress();

    updateNavigation();

    loadLevelFromURL();

}


/* =========================================================
   START
========================================================= */

initialize();
