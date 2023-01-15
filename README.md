<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/tiamat9/vigilant-funicular">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">TrackHack!</h3>

  <p align="left">
    [Visit the web app!](https://hack-n-roll-374701.web.app/) Scraping Gmail to retrieve receipts for the purpose of recording the transactions through our web app. The data will be collated and presented comprehensibly in our web app. Due to time constraints, we currently only take in PayLah. However, in future implementations, we do intend to expand and be more inclusive of payment via other apps. Thus, enabling us in better accommodating our users. Overall, our goal is to make budget tracking as effortless and accurate as possible for our users.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://freeimage.host/i/HYgEuXn)


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Inspiration
Tracking our expenditure was a common issue among our team. We found that we all struggled to remember to key in our expenses into a separate budget tracker. Hence, to improve our budgeting situation, we decided to automate this process to eliminate the human error of forgetting. To err is human, to TrackHack is divine <3 

## How we built it
The team used a combination of web scraping and data analysis techniques to extract information from Gmail and automatically record the transactions, using a Google Gmail API. Lastly, we used a variety of web development tools to create the user interface for our web app.

## Accomplishments that we're proud of
Despite the challenges, the team was able to successfully create a working prototype of TrackHack! that automates the process of tracking expenses. Especially since we were mostly new to what we were implementing, we managed to take away a lot more knowledge by venturing beyond our comfort zone. Plus, this was some of our members' first hackathon, first all-nighter or first sleepover.

## Challenges we ran into
Firstly, on the front end, we were experimenting with new CSS components to challenge ourselves to learn as much from this as possible. However, daisyUI, a component library built on TailwindCSS, clashed with our TailwindCSS styling. So, it took much trial and error to find a solution that worked. Secondly, for the back end, we had trouble utilising Google's Gmail API because of our in-proficiency with Google Cloud Platform's OAuth flow. Thankfully, with the help of the technical advisors, we gained more insight and managed to make it work in the end. Due to the limited time, we were only able to successfully implement PayLah. Besides, our web app records incoming transactions, but not outgoing. 

## What we learned
Through building TrackHack!, the team gained experience in web scraping, data analysis, and web development. They also learned about the importance of time management when working on a project. Our front end developers familiarised themselves with various components available for styling, even beginning to expand into animation to make our web app more dynamic. Our back end developers succeeded in extracting and processing large amounts of data in a timely and efficient manner. Most importantly, we learnt the importance of understanding our audience to be able to design a product for them. Hence, we decided to prototype this web app since it resonates with us.

## What's next for TrackHack!
The team plans to expand the functionality of TrackHack! by adding support for more payment apps and implementing the ability to track outgoing transactions. In the future, we also hope to integrate machine learning algorithms to predict and suggest budgeting plans for users based on their spending habits. Likewise, we plan to continually improve our user interface and add additional features to boost the app's user-friendliness. Not to mention, we hope to strengthen our security as we will be storing sensitive information about our users, since we are tracking their e-payments.

## Built With

    express.js
    firebase
    gmailapi
    google-cloud
    mern
    mongoatlas
    node.js
    react
    render
    vite



<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature


<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
