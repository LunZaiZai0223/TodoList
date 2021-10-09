const data = [{assignment: '洗澡', isDone: true}, {assignment: '睡覺', isDone: false}, {assignment: '健身', isDone: true}, {assignment: '冥想', isDone: false}];
const today = new Date();

const dateContainer = document.querySelector('.container header');
const form = document.querySelector('form');
const ul = document.querySelector('ul');

let str = '';

function render () {
  let str = '';
  if (data.length === 0) {
    return ul.innerHTML = `<li><p style="opacity: 0.5">ALL DONE!</p></li>`;
  }
  data.forEach((value, indexNum) => {
    const { assignment } = value;
    if (value.isDone === true) {
      str += `
      <li class="is-done">
        <div class="input-container">
          <input type="checkbox" data-num="${indexNum}" checked>
        </div>
        <div class="content-btns-container">
          <div class="content">
            <span>${assignment}</span>
          </div>
          <div class="btn-group">
            <button data-num="${indexNum}" class="delete-btn far fa-trash-alt">
            </button>
          </div>
        </div>  
      </li>`;
    } else {
      str += `
      <li>
        <div class="input-container">
          <input type="checkbox" data-num="${indexNum}">
        </div>
        <div class="content-btns-container">
          <div class="content">
            <span>${assignment}</span>
          </div>
          <div class="btn-group">
            <button data-num="${indexNum}" class="delete-btn far fa-trash-alt">
            </button>
          </div>
        </div>  
      </li>`;
    }
    ul.innerHTML = str;
  });
}
function renderDate(today) {
  const year = today.getFullYear();
  const month = today.getMonth();
  let date = today.getDate();
  if (date < 10) {
  	date = '0' + date;
  }
  const day = today.getDay();
  const monthArr = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
  const dayArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  dateContainer.innerHTML = `
  <div class="date-month-year-container">
    <h1 class="date">${date}</h1>
    <div class="month_year">
      <h3 class="month">${monthArr[month]}</h3>
      <h3 class="year">${year}</h3>
    </div>
  </div>
  <h1 class="day">${dayArr[day]}</h1>
  `;
}
function addAssignmentHandler (event) {
  const addInput = document.querySelector('input[name="todo[assignment]"]');
  if (!addInput.value) {
    return assignmentChecker();
  }
  const newAssignment = { assignment:addInput.value, isDone: false };
  data.push(newAssignment);
  addInput.value = '';
  render();
}
function deletAssignment (event) {
  const arrIndexNum = Number(event.target.dataset.num);
  data.splice(arrIndexNum, 1);
  console.log(data);
  render();
}
function changeIsDoneValue (event) {
	const arrIndexNum = Number(event.target.dataset.num);
    const isChecked = event.target.checked;
    if (isChecked) {
      data[arrIndexNum].isDone = true;
    } else {
      data[arrIndexNum].isDone = false;
    }
}
function toggleIsDoneClass (event) {
  const li = event.target.parentElement.parentElement;
  li.classList.toggle('is-done');
}
function assignmentChecker () {
  // 如果已有警示
  if (form.lastElementChild.className === 'alert-message') {
    return;
  }
  // 如未有警示
  const alertMessage = document.createElement('span');
  alertMessage.classList.add('alert-message');
  alertMessage.innerHTML = '我不也不知道您要做什麼耶';
  form.append(alertMessage);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  addAssignmentHandler();
});
form.addEventListener('input', () => {
  const alertMessage = '' || form.lastElementChild.className === 'alert-message';
  if (alertMessage) {
    const deletedEle = document.querySelector('.alert-message');
    deletedEle.remove();
  }
});
ul.addEventListener('click', (event) => {
  const nodeName = event.target.nodeName.toUpperCase();
  if (nodeName === 'INPUT') {
  	toggleIsDoneClass(event);
    return changeIsDoneValue(event);
  }
  if (nodeName !== 'BUTTON') {
    return;
  }
  deletAssignment(event);
});

renderDate(today);
render();
