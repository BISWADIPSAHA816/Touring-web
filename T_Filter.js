const regionRadios = document.querySelectorAll('input[name="region"]');
const activityCheckboxes = document.querySelectorAll('input[name="activity"]');
const touristSpots = document.querySelectorAll('.spot');

function filterSpots() {
  const selectedRegion = document.querySelector('input[name="region"]:checked').value;
  const selectedActivities = Array.from(activityCheckboxes).filter(cb => cb.checked).map(cb => cb.value);
  
  touristSpots.forEach(spot => {
    const region = spot.classList.contains(selectedRegion) || selectedRegion === 'all';
    const activities = selectedActivities.every(activity => spot.classList.contains(activity));
    
    if (region && activities) {
      spot.classList.add('selected');
    } else {
      spot.classList.remove('selected');
    }
  });
}

regionRadios.forEach(radio => radio.addEventListener('change', filterSpots));
activityCheckboxes.forEach(checkbox => checkbox.addEventListener('change', filterSpots));