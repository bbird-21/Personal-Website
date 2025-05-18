import spacepong from "../../assets/projects/spacepong.mp4"
import webserv from "../../assets/projects/webserv.mp4"

export const sections = [
	{
		id: 1,
		title: "Transcendence",
		description: [
			"Transcendence is a full-featured web application built as a final project at 42 School.",
			"It includes a real-time Pong game, user tournaments, social features like friend management, chat and more."
		],
		features: [
			"Robust backend powered by Django",
			"Security enhanced by JWT and 2FA",
			"Full Dockerized Application"
		],
		video: spacepong,
	},
	{
		id: 2,
		title: "Webserv",
		description: [
			"Webserv is a lightweight HTTP server developed in C++.",
			"It replicates core functionalities of Nginx, handling HTTP requests, CGI execution, and configuration parsing."
		],
		features: [
			"Built from scratch in C++ following RFC 7230",
			"Supports GET, POST, and DELETE methods",
			"Custom configuration file parser",
		],
		video: webserv,
	}
]
