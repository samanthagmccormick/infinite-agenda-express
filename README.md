<h2>JS15: Infinite Agenda</h2><h3>Objective</h3><p>Create an infinite-scroll agenda which uses delegated events to handle events on agenda items even
as new ones are added.</p><h3>Skills</h3><ul><li>DOM</li><li>delegated events</li></ul><h3>Requirements</h3><ol><li>Write a calendar app that displays the user’s appointments in an agenda format (that is, a linear
list of days, not a calendar grid).
Today should be at the top, tomorrow below, and so on.</li><li>The user can click on a day to add a new appointment.<ol><li>The form will appear inline when the user clicks an add button and disappear again after the user submits.</li><li>The form should be empty again each time the user adds a new appointment.</li><li>The user should be able to hit enter to submit the form.</li></ol></li><li>The user can click on an appointment to edit it. Convert the appointment into a form with the fields
prefilled for the user to edit. Convert it back to non-editable text when they are done editing.</li><li>The page should load with one week shown, but as the user scrolls down, new days should be added dynamically.</li><li>All events for adding/removing appointments should be functional for newly added days without
re-adding event handlers (<a href="http://api.jquery.com/on/#direct-and-delegated-events">delegation</a>!).</li></ol>