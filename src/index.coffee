counterButton = document.querySelector '.counter-button'
resetButton = document.querySelector '.reset-button'
counterArea = document.querySelector '.counter'

counter = -1

counterStatus = (status) ->
  counter = if status is 'count' then counter + 1 else 0
  counterArea.textContent = counter

counterStatus()

counterButton.addEventListener 'click', -> counterStatus 'count'
resetButton.addEventListener 'click', -> counterStatus()
