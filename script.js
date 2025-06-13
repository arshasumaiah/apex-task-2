// Contact Form functionality
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('formStatus').innerText = "Message sent successfully!";
  this.reset();
});

// To-Do List functionality
document.getElementById('addBtn').addEventListener('click', function () {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'deleteBtn';
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = "";
});
