<h2>Web Development Technologies & Deployment Technologies</h2>
<p>  <img alt="spring" src="https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=for-the-badge"> 
        <img src="https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="reactjs"> 
        <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=fff&style=for-the-badge" alt="mysql"> 
        <img src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white" alt="nginx"> 
        <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white" alt="docker"> 
    <img src="https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=fff&style=for-the-badge" alt="kubenetes">
    <img src="https://img.shields.io/badge/Elastic%20Stack-005571?logo=elasticstack&logoColor=fff&style=for-the-badge" alt="Elastic Stack">
    <img src="https://img.shields.io/badge/Prometheus-E6522C?logo=prometheus&logoColor=fff&style=for-the-badge" alt="Prometheus">
    <img src="https://img.shields.io/badge/Grafana-F46800?logo=grafana&logoColor=fff&style=for-the-badge" alt="Grafana">
    <img src="https://img.shields.io/badge/Vagrant-1868F2?logo=vagrant&logoColor=fff&style=for-the-badge" alt="Vagrant">
</p> 

## ApexApartment

**ApexApartment** is an innovative condominium management project aimed at enhancing the quality of life and residential experience in upscale residential areas. With a mission to create a harmonious, peaceful, and convenient living environment, ApexApartment combines modern technology and attentive resident care services to provide the best living experience for all residents.

## Table of contents
*  [ 📒Project Report](http://docs.google.com/document/d/12cSDdIS0Dhlr0UdrnS2ztSb2kO_CuC30)
* 🏛️[Technology Architecture](#architecture-diagram)
	* 💻 [VMs](#VMs)
	* ⏱️[Monitoring](##Monitoring) 
	* 📝[Logging](##Logging)
* 🛠️[Prerequisites](#prerequisites)
* 🚀[Getting Started](#getting-started)  
* 📧[Contact](#contact)



## 🏛️ Architecture
### VMs
- The project includes a Kubernetes cluster with 3 nodes to ensure high availability and fault tolerance for containerized applications. Each node in the cluster contributes to the overall performance and reliability. Additionally, a dedicated NFS (Network File System) server is set up to provide shared storage across the cluster. This NFS server ensures consistent and accessible storage for persistent data and configuration files. The integration of the NFS server with the Kubernetes cluster supports efficient data management and application continuity.

![enter image description here](https://res.cloudinary.com/dgiozc0lj/image/upload/v1719978018/sy7jrjdjwrlgvh9ckucu.jpg) 
 

## ⏱️Monitoring   
- This project utilizes Prometheus for comprehensive metrics collection and Grafana for visualization and dashboarding. Prometheus monitors various system and application metrics, providing detailed insights into performance and health. Grafana integrates with Prometheus to create customizable and interactive dashboards. Alerts are configured to notify you of any anomalies or critical issues, with notifications sent through Slack to ensure timely responses.

![enter image description here](https://res.cloudinary.com/dgiozc0lj/image/upload/v1719978018/ilzdcj8tdnajj6p19him.jpg)

## ⏱️Logging
- For logging, the project utilize the ELK Stack (Elasticsearch, Logstash, Kibana). Elasticsearch stores and indexes logs, making them easily searchable and analyzable. Logstash processes and forwards log data from various sources to Elasticsearch. Kibana provides a powerful interface for visualizing log data, enabling effective monitoring and troubleshooting. This setup ensures a robust and scalable logging solution for tracking application and system events.

![enter image description here](https://res.cloudinary.com/dgiozc0lj/image/upload/v1719978018/aveibai9qfho4e71ovei.jpg)

## 🛠️Prerequisites
- To run this project, ensure that your computer has a multi-core processor (4 cores or more), at least 12 GB of RAM, and 100 GB of SSD storage.


## 📧 Contact
<p>Don't hesitate to contact me if you have any confusion or questions.</p>
<div style="display: flex; gap: 10px; align-items: center;">
    <a href="mailto:trankimbang0809@gmail.com" target="_blank" style="text-decoration: none;">
        <img src="https://img.icons8.com/color/48/000000/gmail--v2.png" alt="trankimbang0809@gmail.com" height="30" width="40">
    </a> 
    <a href="http://www.linkedin.com/in/tranbang/" target="_blank">
        <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="LinkedIn" height="30" width="40">
    </a>
</div>
<a href="#ApexApartment" style="transition: all .25s ease-in-out; position: fixed; bottom: 0; right: 0; display: inline-flex; cursor: pointer; align-items: center; justify-content: center; margin: 0 2em 2em 0; padding: .25em; width: 8em; height: 2em; background-color: #f0f0f0; text-align: center;">
  🔼 Back to top
</a>
