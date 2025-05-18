import spacepong from "../../assets/projects/spacepong.mp4"
import webserv from "../../assets/projects/webserv.mp4"
import minishell from "../../assets/projects/minishell.mp4"

import { transcendenceIcons, webservIcons, minishellIcons } from "../../assets/icons/icons"

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
		techStack: transcendenceIcons,
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
		techStack: webservIcons,
		video: webserv,
	},
	{
		id: 3,
		title: "Minishell",
		description: [
			"Minishell is a minimal Unix shell implemented in C.",
			"It replicates essential shell behaviors, including command parsing, redirections, and pipelines."
		],
		features: [
			"Interactive command-line interface with history and prompt",
			"Supports built-in commands (cd, echo, pwd, export, unset, env, exit)",
			"Handles pipes, redirections, and environment variable expansion",
		],
		techStack: minishellIcons,
		video: minishell,
	},
]
