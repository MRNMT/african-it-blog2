
    document.getElementById('myButton1').onclick= function() {
        alert("What Goes Into an IT Budget?Hardware: Laptops, routers, servers, backup power supplies (especially important where electricity is unreliable).Software: Operating systems, business tools like Microsoft 365 or Adobe, or industry-specific platforms.Cloud Storage & Hosting: Services like AWS or Azure—used for data backups, website hosting, and app storage.Training & Development: So your team doesn’t fall behind the tech curve.Cybersecurity: Firewalls, secure logins, and regular system updates to keep hackers out.");
    };

    document.getElementById('myButton2').onclick= function() {
        alert('Strong Passwords & Multi-Factor Authentication:\n Don’t just use “123456” and hope for the best.\nStaff Training: Teach people what to look out for—like sketchy links or suspicious email attachments.\nFirewall & Antivirus: These are like digital guards protecting your system from invaders.\nRegular Backups: If things go south, you don’t want to lose all your data.');
    };
    document.getElementById('myButton3').onclick= function() {
        alert('Why It Matters in Africa Cost-effective:\n1.No need for expensive hardware.\n You pay for what you use. Scalable: \nStart small and grow fast—perfect for startups and SMEs.\n2. Accessible: Enables remote work, online education, and digital services even in rural areas.');
    };
        document.getElementById('myButton4').onclick= function() {
        alert('ButEducation: E-learning platforms are expanding access to quality education.Finance: Mobile money (like M-Pesa) has revolutionized banking in East Africa.Agriculture: Apps help farmers access weather forecasts, market prices, and digital payments.Governance: E-government services reduce bureaucracy and improve transparency.ton4');
    };
    document.querySelectorAll('.collapse-toggle').forEach(btn => {
  btn.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.style.display = (content.style.display === 'none' ? 'block' : 'none');
  });
});

document.querySelectorAll('.collapsible-content').forEach(div => {
  div.style.display = 'none';
});
document.getElementById('toggleContentBtn').onclick = function() {
    const mainContent = document.getElementById('div1');
    if (mainContent.style.display === 'none') {
        mainContent.style.display = '';
        this.textContent = 'Hide Budget Section';
    } else {
        mainContent.style.display = 'none';
        this.textContent = 'Show Budget Section';
    }
};
document.getElementById('toggleContentBtn2').onclick = function() {
    const mainContent = document.getElementById('div2');
    if (mainContent.style.display === 'none') {
        mainContent.style.display = '';
        this.textContent = 'Hide Cybersecurity Section';
    } else {
        mainContent.style.display = 'none';
        this.textContent = 'Show cybersecurity Section';
    }
};
document.getElementById('toggleContentBtn3').onclick = function() {
    const mainContent = document.getElementById('div3');
    if (mainContent.style.display === 'none') {
        mainContent.style.display = '';
        this.textContent = 'Hide Cybersecurity Section';
    } else {
        mainContent.style.display = 'none';
        this.textContent = 'Show cybersecurity Section';
    }
};
document.getElementById('toggleContentBtn4').onclick = function() {
    const mainContent = document.getElementById('div4');
    if (mainContent.style.display === 'none') {
        mainContent.style.display = '';
        this.textContent = 'Hide Cybersecurity Section';
    } else {
        mainContent.style.display = 'none';
        this.textContent = 'Show cybersecurity Section';
    }
};
