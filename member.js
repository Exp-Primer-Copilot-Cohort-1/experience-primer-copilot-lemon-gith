function skillsMember() {
    return {
        name: "GitHub Copilot",
        age: 2,
        skills: ["JavaScript", "AI programming", "Code generation"],
        getIntroduction: function() {
            return `Hi, I'm ${this.name} and I'm ${this.age} years old. I have skills in ${this.skills.join(", ")}.`;
        }
    };
}