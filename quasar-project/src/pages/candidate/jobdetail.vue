<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Details</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .job-details-container {
            display: flex;
            flex-wrap: wrap;
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            max-width: 1200px;
            padding: 20px;
        }

        .job-card, .job-highlights, .similar-jobs, .steps {
            background-color: #fff;
            border: 1px solid #e1e1e1;
            border-radius: 10px;
            padding: 20px;
            margin: 10px;
            flex: 1;
            min-width: 300px;
        }

        .job-card .apply-button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            text-align: center;
            display: block;
            text-decoration: none;
            font-weight: bold;
        }

        .job-highlights, .steps, .similar-jobs {
            background-color: #f4f4f4;
        }

        .job-highlights .highlight-item, .steps .step-item, .similar-jobs .similar-job {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }

        .steps {
            background-color: #fef4e7;
        }

        .steps .step-item {
            flex-direction: column;
            align-items: center;
        }

        .steps .step-item img {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }

        .similar-jobs .similar-job img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
        }
    </style>
</head>
<body>
    <div class="job-details-container">
        <div class="job-card">
            <h2>Senior Civil Project Manager</h2>
            <p><strong>Luxuria Homes</strong></p>
            <p><i class="fas fa-map-marker-alt"></i> Halasahalli, Bengaluru/Bangalore</p>
            <p><i class="fas fa-rupee-sign"></i> ₹30,000 - ₹149,999 monthly</p>
            <p>Fixed: ₹30,000 - ₹149,999</p>
            <p>Earning Potential: ₹149,999</p>
            <p>
                <span>Work from Office</span>
                <span>Full Time</span>
                <span>Min. 5 years</span>
                <span>Good (Intermediate / Advanced) English</span>
            </p>
            <a href="#" class="apply-button">Apply for job</a>
        </div>
        <div class="steps">
            <h3>Get your dream job in 3 simple steps:</h3>
            <div class="step-item">
                <img src="apply-icon.png" alt="Apply">
                <p>Apply for job</p>
            </div>
            <div class="step-item">
                <img src="profile-icon.png" alt="Profile">
                <p>Create profile</p>
            </div>
            <div class="step-item">
                <img src="interview-icon.png" alt="Interview">
                <p>Schedule interview</p>
            </div>
            <div class="step-item">
                <img src="hired-icon.png" alt="Get hired">
                <p>Get hired</ is the applied step button icon=""></p>
            </div>
        </div>
        <div class="similar-jobs">
            <h3>Similar jobs</h3>
            <div class="similar-job">
                <img src="civil-design-engineer-icon.png" alt="Civil Design Engineer">
                <div>
                    <p><strong>Civil Design Engineer</strong></p>
                    <p>Sri Raja Rajeswari Constructions India...</p>
                    <p>Bilekahalli, Bengaluru/Bangalore</p>
                    <p>₹20,000 - ₹25,000 monthly</p>
                    <p>Field Job, Full Time, Min. 1 year, English</p>
                </div>
            </div>
            <div class="similar-job">
                <img src="quantity-surveyor-icon.png" alt="Quantity Surveyor">
                <div>
                    <p><strong>Quantity Surveyor</strong></p>
                    <p>Aarna Infratech India Private Limited</p>
                    <p>Banashankari, Bengaluru/Bangalore</p>
                    <p>₹50,000 - ₹60,000 monthly</p>
                    <p>Work from Office, Full Time, Min. 10 years</p>
                </div>
            </div>
        </div>
        <div class="job-highlights">
            <h3>Job highlights</h3>
            <div class="highlight-item">
                <i class="fas fa-fire"></i>
                <p>Urgently hiring</p>
            </div>
            <div class="highlight-item">
                <i class="fas fa-users"></i>
                <p>78 applicants</p>
            </div>
        </div>
    </div>
</body>
</html>
