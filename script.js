// Get the event form elements
const eventForm = document.querySelector('#event-form');
const eventNameInput = document.querySelector('#event-name-input');
const eventStartDateInput = document.querySelector('#event-start-date-input');
const eventEndDateInput = document.querySelector('#event-end-date-input');
const eventLocationInput = document.querySelector('#event-location-input');
const eventTicketsSelect = document.querySelector('#event-tickets-select');
const eventApprovalCheckbox = document.querySelector('#event-approval-checkbox');
const eventCapacityInput = document.querySelector('#event-capacity-input');
const eventVisibilitySelect = document.querySelector('#event-visibility-select');

// Validate the event form data
function validateEventForm() {
  if (eventNameInput.value === '') {
    alert('Event name is required');
    return false;
  }

  if (eventStartDateInput.value === '') {
    alert('Event start date is required');
    return false;
  }

  if (eventEndDateInput.value === '') {
    alert('Event end date is required');
    return false;
  }

  if (eventLocationInput.value === '') {
    alert('Event location is required');
    return false;
  }

  return true;
}

// Create a new event object
function createEvent() {
  const event = {
    name: eventNameInput.value,
    startDate: eventStartDateInput.value,
    endDate: eventEndDateInput.value,
    location: eventLocationInput.value,
    tickets: eventTicketsSelect.value,
    approvalRequired: eventApprovalCheckbox.checked,
    capacity: eventCapacityInput.value,
    visibility: eventVisibilitySelect.value
  };

  return event;
}

// Submit the event creation request to the server
function submitEventCreationRequest(event) {
  // TODO: Implement this function to send the event object to the server
  // and handle the server response.
}

// Add an event listener to the event form submit button
eventForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateEventForm()) {
    const event = createEvent();
    submitEventCreationRequest(event);
  }
});
