const tabContainer = document.getElementById('templateTabs');
const resumeEl = document.getElementById('resume');

for (let i = 1; i <= 200; i++) {
  const btn = document.createElement('button');
  btn.textContent = 'Template ' + i;
  btn.onclick = () => setTemplate(i, btn);
  if (i === 1) btn.classList.add('active');
  tabContainer.appendChild(btn);
}

function setTemplate(num, activeBtn) {
  resumeEl.className = 'resume-template template-' + num;
  document.querySelectorAll('.template-tabs button').forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

function updateResume() {
  document.getElementById('rName').textContent = document.getElementById('name').value;
  document.getElementById('rTitle').textContent = document.getElementById('title').value;
  document.getElementById('rContact').textContent = document.getElementById('contact').value;
  document.getElementById('rObjective').textContent = document.getElementById('objective').value;
  document.getElementById('rEducation').textContent = document.getElementById('education').value;
  document.getElementById('rExperience').textContent = document.getElementById('experience').value;
  document.getElementById('rSkills').textContent = document.getElementById('skills').value;

  const linkedin = document.getElementById('linkedin').value;
  const github = document.getElementById('github').value;
  const website = document.getElementById('website').value;

  document.getElementById('rLinkedin').innerHTML = linkedin ? `
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg" width="20" style="vertical-align: middle; margin-right: 6px;"> 
    <a href="${linkedin}" target="_blank">${linkedin}</a>
  ` : '';

  document.getElementById('rGithub').innerHTML = github ? `
    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/github.svg" width="20" style="vertical-align: middle; margin-right: 6px; filter: invert(1);"> 
    <a href="${github}" target="_blank">${github}</a>
  ` : '';

  document.getElementById('rWebsite').innerHTML = website ? `
    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Globe_icon.svg" width="20" style="vertical-align: middle; margin-right: 6px;"> 
    <a href="${website}" target="_blank">${website}</a>
  ` : '';
    }

function previewPhoto(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = document.getElementById('resumePhoto');
    img.src = e.target.result;
    img.style.display = 'block';
  }
  reader.readAsDataURL(file);
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function downloadPDF() {
  const element = document.getElementById('resume');
  const opt = {
    margin: 0.3,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().from(element).set(opt).save();
}
