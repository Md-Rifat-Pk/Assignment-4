let filterStatus = 'all';

function refreshTracker() {
    const cards = document.getElementsByClassName('job-card');
    let total = cards.length;
    let interviewCount = 0;
    let rejectedCount = 0;
    let shown = 0;

    
    for (let i = 0; i < cards.length; i++) {
        const item = cards[i];
        const status = item.getAttribute('data-status');

        if (status === 'interview') interviewCount++;
        if (status === 'rejected') rejectedCount++;

        if (filterStatus === 'all' || status === filterStatus) {
            item.style.display = 'block';
            shown++;
        } else {
            item.style.display = 'none';
        }
    }

    document.getElementById('count-all').innerText = total;
    document.getElementById('count-interview').innerText = interviewCount;
    document.getElementById('count-rejected').innerText = rejectedCount;
    document.getElementById('badge-count').innerText = shown + " of " + total + " jobs";

    const emptyMsg = document.getElementById('no-content');
    if (shown === 0) {
        emptyMsg.classList.remove('hidden');
    } else {
        emptyMsg.classList.add('hidden');
    }
}

function updateJob(id, newStatus) {
    const card = document.getElementById(id);
    const box = card.querySelector('.status-box');
    
    card.setAttribute('data-status', newStatus);
    
    if (newStatus === 'interview') {
        card.style.borderLeft = "6px solid #22c55e";
        box.innerHTML = '<span class="status-chip chip-green">Interview</span>';
    } else {
        card.style.borderLeft = "6px solid #ef4444";
        box.innerHTML = '<span class="status-chip chip-red">Rejected</span>';
    }
    refreshTracker();
}

function deleteThis(id) {
    document.getElementById(id).remove();
    refreshTracker();
}

function setFilter(type, el) {
    filterStatus = type;
    const tabs = document.querySelectorAll('.tab');
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('tab-active', 'text-white');
    }
    el.classList.add('tab-active', 'text-white');
    refreshTracker();
}

window.onload = refreshTracker;