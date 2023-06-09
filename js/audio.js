Howler.volume(0.3);
const audio = {
  backgroundMusic: new Howl({
    src: "./audio/backgroundMusic.mp3",
    loop: true,
  }),
  enemyShoot: new Howl({
    src: "./audio/enemyShoot.wav",
  }),
  explosion: new Howl({
    src: "./audio/explosion.wav",
    volume: 0.4,
  }),
  gameOver: new Howl({
    src: "./audio/gameOver.wav",
  }),
  gridClear: new Howl({
    src: "./audio/gridClear.wav",
  }),
  shoot: new Howl({
    src: "./audio/shoot.wav",
    volume: 0.4,
  }),
  start: new Howl({
    src: "./audio/start.mp3",
  }),
};
