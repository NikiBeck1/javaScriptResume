let name = 'niki beck';
console.log('Name: ' + name.toUpperCase());

let career = 'Digital Specialist';
console.log('Career: ' + career);

let description = 'I specialize in photography, videography, and web development.';
console.log('Description: ' + description);

console.log("\n")

let interests = {
    d: '* Photography',
    e: '* Reading',
    f: '* Coding'
}
console.log('My Interests:');
console.log(interests.d);
console.log(interests.e);
console.log(interests.f);

console.log("\n")


let experience = [
    {
        name: '* Hamburger Creative',
        title: 'Co-owner',
        description: 'Designed and launched websites'
    },

    {
        name: '* Freelancer',
        title: 'Photogrpaher + Videographer',
        description: 'Captured photo and video content for weddings, individuals, and businesses.'
    },
    {
        name: '* Celebration Church',
        title: 'Social Media Coordinator',
        description: 'Managed posting for all church accounts'
    }
]

console.log('My experience:');

function displayPosition(name, title, description) {
    console.log(name);
    console.log(title);
    console.log(description);
}

for (let i = 0; i < experience.length; i++) {
    displayPosition(experience[i].name, experience[i].title, experience[i].description);
}


console.log("\n")



    let skills = [
        {
            name: 'Expert Iced Coffee Maker'
        },
    
        {
            name: 'Ultimate Procrastinator'

        },
        {
            name: 'Professional Photogrpher',
            bam: 'cool'
        },
        {
            name: 'Fluent in HTML & CSS',
            bam: 'cool'
        }
    ]



console.log('My Skills: ' + ("\n"));

function displaySkills(name, bam) {
    if (bam == 'cool') {
        console.log('* BAM! ' + name);   
    }
    else console.log('* ' + name);
}


for (let i = 0; i < skills.length; i++) {
    displaySkills(skills[i].name, skills[i].bam);
}

