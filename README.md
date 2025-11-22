# AI-webApp-SpringBoot

### **Spring Boot + Spring AI + ReactJS +OpenAI (GPT + DALL·E)**

![Java](https://img.shields.io/badge/Java-17-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)
![Spring AI](https://img.shields.io/badge/Spring%20AI-Enabled-orange)
![React](https://img.shields.io/badge/ReactJS-18-blue)
![OpenAI](https://img.shields.io/badge/OpenAI-GPT%20%2F%20DALL·E-purple)
![Build](https://img.shields.io/badge/Build-FullStack-success)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)

---

## **Project Overview**

This is a **full-stack AI-powered web application** integrating **three major AI features in one platform**:

* **AI Chatbot** (GPT-powered conversational assistant)
* **AI Image Generator** (DALL·E model)
* **AI Recipe Generator** (dynamic recipe suggestions using GPT)

The frontend is built using **ReactJS**, and the backend uses **Spring Boot + Spring AI** to interact with **OpenAI APIs**.

---

## **Purpose of the Project**

Today, AI tools like ChatGPT, DALL·E, and recipe generators exist — but all separately.
To solve this fragmentation, this project provides:

> **One unified platform where users can chat with AI, generate images, and create recipes — all in one clean, fast, user-friendly interface.**

This project was developed to learn real-world **AI integration, REST API communication, and full-stack architecture**.

---

## **Tech Stack**

### **Frontend**

* ReactJS
* JavaScript (Fetch API)

### **Backend**

* Java 17
* Spring Boot
* Spring AI
* REST APIs (Controllers, Services)
* CORS configuration

### **AI Models**

* **GPT (Chat)**
* **DALL·E (Image Generation)**
---
## **Key Features**

### **1. AI Chatbot**

* User enters any prompt
* React sends `GET /ask-ai?prompt=...`
* Spring AI sends prompt to GPT
* Response shown in clean UI

---

### **2. AI Image Generator**

* User enters image description
* Options: size, number of images, quality
* Backend uses **OpenAiImageModel (DALL·E)**
* Image URLs returned & displayed in grid

---

### **3. AI Recipe Generator**

* User enters ingredients + preferences
* Backend creates structured prompt
* GPT returns:

  * Recipe title
  * Ingredients list
  * Instructions
* Displayed in formatted `<pre>` block

---

## **Frontend Workflow (ReactJS)**

* Tab-based navigation: **Chat | Image | Recipes**
* `useState` to manage inputs & responses
* API calls using `fetch()`
* Components re-render on response
* Simple, modular UI

---

## **Backend Workflow (Spring Boot + Spring AI)**

* Layered architecture:

  * **Controller → Service → Spring AI → OpenAI**
* Endpoints:

  * `/ask-ai`
  * `/generate-image`
  * `/recipe-creator`
* Uses Spring AI `ChatModel` & `OpenAiImageModel`
* Clean separation of logic
* CORS enabled for React (localhost:3000)

---

## **REST API Communication (Short Explanation)**

**Full flow:**
`React → Spring Boot → Spring AI → OpenAI → Spring Boot → React`

* React sends user input
* Backend processes request
* Spring AI sends it to OpenAI
* Response returned to UI

---

## **Future Enhancements**

* User Login & Authentication
* Image Gallery with download/share
* Voice Input for Chat & Recipes
* Save chat history & recipe history
* Dark mode
* Multi-language support

---

##  **Contact**

**Developer:** Panabaka Dhanaraj
**Tech Stack:** Java • React • Spring Boot • AI Integration
**Email: ** panabakadhanaraj@gmail.com
---
