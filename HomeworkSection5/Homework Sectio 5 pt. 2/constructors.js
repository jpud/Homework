class videoGame {
    constructor(rating, year, title, genre) {
      this.rating = rating;
      this.year = year;
      this.title = title;
      this.genre = genre;
      this.bio = `${this.title} came out in ${
        this.year
      } The genre is ${this.genre}`;
      console.log(this.bio);
    }
  }
  const pat = new videoGame("M", 2009, "Modern Warfare 2", "FPS");
  console.log(pat); 

  class extraFacts extends videoGame {
    constructor(year, title, genre, console) {
      super(year, title, genre);
      this.console = console;
    }
    console() {
        return 'This game is played on the ${console} system.';
    }}
  const newGame = new extraFacts("M", 2013, "DragonAge: Inquisition", "PS3/Xbox 360");

  newGame.console();
  newGame.bio;