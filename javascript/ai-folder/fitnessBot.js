class FitnessBot {
  constructor() {
    this.exercises = {
      cardio: ['Running', 'Jumping jacks', 'Burpees', 'Mountain climbers'],
      strength: ['Push-ups', 'Squats', 'Lunges', 'Planks'],
      flexibility: ['Stretching', 'Yoga', 'Pilates']
    };
  }

  greet() {
    return "Hello! I'm your virtual fitness assistant. How can I help you today?";
  }

  getRandomExercise(category) {
    if (this.exercises[category]) {
      const randomIndex = Math.floor(Math.random() * this.exercises[category].length);
      return this.exercises[category][randomIndex];
    }
    return "Sorry, I don't have exercises for that category.";
  }

  respondTo(input) {
    input = input.toLowerCase();

    if (input.includes('hello') || input.includes('hi')) {
      return this.greet();
    } else if (input.includes('cardio')) {
      return `Here's a cardio exercise you can try: ${this.getRandomExercise('cardio')}`;
    } else if (input.includes('strength')) {
      return `Here's a strength exercise you can try: ${this.getRandomExercise('strength')}`;
    } else if (input.includes('flexibility')) {
      return `Here's a flexibility exercise you can try: ${this.getRandomExercise('flexibility')}`;
    } else if (input.includes('workout')) {
      return "Sure! I recommend a mix of cardio, strength, and flexibility exercises. Would you like a suggestion for one of these categories?";
    } else {
      return "I'm sorry, I didn't understand that. Can you ask about cardio, strength, or flexibility exercises?";
    }
  }
}

// Export the FitnessBot class so it can be used in other files
export default FitnessBot;