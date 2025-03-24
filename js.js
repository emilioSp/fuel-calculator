function computeGasoline() {
  const raceDuration = document.getElementById("race-duration").value;
  const lapDuration = document.getElementById("lap-duration").value;
  const gasolinePerLap = document.getElementById("gasoline-per-lap").value;

  const raceDurationInSeconds = parseInt(raceDuration) * 60;
  const lapDurationArray = lapDuration.split(':');
  const lapDurationInSeconds = parseInt(lapDurationArray[0]) * 60 + parseInt(lapDurationArray[1]) + parseInt(lapDurationArray[2]) / 1000;
  const numberOfLaps = Math.ceil(raceDurationInSeconds / lapDurationInSeconds);
  const gasoline = Math.ceil(gasolinePerLap * numberOfLaps);

  document.getElementById("laps-race").value = numberOfLaps;
  document.getElementById("gasoline-race").value = gasoline;
}
