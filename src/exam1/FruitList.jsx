import React from "react";

// 제철 과일 이름, 상세 정보 리스트
const FruitList = [

    {
        month: [8, 9, 10], 
        emoji: "🍇",
        name: "포도",
        tip: "알이 탱탱하고 껍질이 잘 벗겨지는 것이 좋아요.",
        nut: "폴리페놀과 비타민이 풍부해요.",
        menu: "포도주스, 포도젤리",
        color: "#7B3F61",

    },

    {
        month: [6, 7, 8],
        emoji: "🍈",
        name: "멜론",
        tip: "향이 진하고 껍질 무늬가 선명한 것이 맛있어요.",
        nut: "칼륨과 비타민C가 많아요.",
        menu: "멜론빙수, 멜론샐러드",
        color: " #a7f5a7",
    },

    {
        month: [6, 7, 8],
        emoji: "🍉",
        name: "수박",
        tip: "줄무늬가 선명하고 두드렸을 때 맑은 소리가 나는 것이 좋아요.",
        nut: "수분과 리코펜이 풍부해요.",
        menu: "수박화채, 수박주스",
        color: " #FF4C4C",
    },

    {
        month: [11, 12, 1, 2],
        emoji: "🍊",
        name: "귤",
        tip: "껍질이 얇고 꼭지가 작을수록 당도가 높아요.",
        nut: "비타민C가 풍부해요.",
        menu: "귤청, 귤차",
        color: "#FFA500",
    },

    {
        month: [6, 7, 8],
        emoji: "🍋",
        name: "레몬",
        tip: "껍질이 매끈하고 향이 강한 것이 좋아요.",
        nut: "비타민C와 구연산이 풍부해요.",
        menu: "레몬에이드, 레몬드레싱",
        color: "#FFF44F",
    },

    {
        month: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        emoji: "🍌",
        name: "바나나",
        tip: "껍질에 검은 점이 조금 있는 것이 당도가 높아요.",
        nut: "칼륨과 식이섬유가 풍부해요.",
        menu: "바나나스무디, 바나나빵",
        color: "#ffed87 ",
        image:"/img/strawberry.jpg",
    },

    {
        month: [5, 6, 7, 8],
        emoji: "🍍",
        name: "파인애플",
        tip: "향이 진하고 무게가 묵직한 것이 좋아요.",
        nut: "브로멜라인과 비타민C가 풍부해요.",
        menu: "파인애플볶음밥, 파인애플주스",
        color: "#FFD700",
    },

    {
        month: [7, 8, 9],
        emoji: "🥭",
        name: "망고",
        tip: "향이 진하고 껍질이 매끈한 것이 좋아요.",
        nut: "비타민A와 비타민C가 풍부해요.",
        menu: "망고빙수, 망고주스",
        color: "#ffcc85",
    },

    {
        month: [9, 10, 11],
        emoji: "🍎",
        name: "빨간 사과",
        tip: "껍질이 매끈하고 단단한 것이 좋아요.",
        nut: "식이섬유와 비타민C가 풍부해요.",
        menu: "사과파이, 사과주스",
        color: "#ed5e6a ",
    },

    {
        month: [9, 10],
        emoji: "🍐",
        name: "배",
        tip: "무게가 묵직하고 껍질이 매끈한 것이 좋아요.",
        nut: "수분과 식이섬유가 풍부해요.",
        menu: "배숙, 배즙",
        color: "#F5E6CC",
    },
    {
        month: [7, 8],
        emoji: "🍑",
        name: "복숭아",
        tip: "향이 진하고 껍질에 털이 고르게 있는 것이 좋아요.",
        nut: "비타민C와 식이섬유가 풍부해요.",
        menu: "복숭아빙수, 복숭아주스",
        color: " #FFB6B9",
    },
    {
        month: [6, 7],
        emoji: "🍒",
        name: "체리",
        tip: "알이 단단하고 색이 진한 것이 좋아요.",
        nut: "안토시아닌과 비타민C가 풍부해요.",
        menu: "체리파이, 체리주스",
        color: "#b84e44",
    },
    {
        month: [3, 4, 5],
        emoji: "🍓",
        name: "딸기",
        tip: "색이 진하고 꼭지가 신선한 것이 좋아요.",
        nut: "비타민C와 엽산이 풍부해요.",
        menu: "딸기케이크, 딸기주스",
        color: "#de5c5e ",
        image: "/img/strawberry.jpg",
    },
    {
        month: [7, 8],
        emoji: "🫐",
        name: "블루베리",
        tip: "알이 단단하고 색이 진한 것이 좋아요.",
        nut: "안토시아닌과 항산화 성분이 풍부해요.",
        menu: "블루베리머핀, 블루베리주스",
        color: "#80aaff ",
    },
    {
        month: [5, 6],
        emoji: "🥝",
        name: "키위",
        tip: "껍질이 고르고 단단한 것이 좋아요.",
        nut: "비타민C와 식이섬유가 풍부해요.",
        menu: "키위샐러드, 키위주스",
        color: "#A8C686",
    },
    {
        month: [7, 8],
        emoji: "🍅",
        name: "토마토",
        tip: "색이 진하고 단단한 것이 좋아요.",
        nut: "리코펜과 비타민C가 풍부해요.",
        menu: "토마토샐러드, 토마토주스",
        color: " #ff9380",
    },
    {
        month: [9, 10],
        emoji: "🫒",
        name: "올리브",
        tip: "색이 진하고 단단한 것이 좋아요.",
        nut: "불포화지방산과 항산화 성분이 풍부해요.",
        menu: "올리브피자, 올리브샐러드",
        color: " #93a757",
    },
    {
        month: [11, 12],
        emoji: "🥥",
        name: "코코넛",
        tip: "껍질이 단단하고 무게가 묵직한 것이 좋아요.",
        nut: "코코넛워터와 건강한 지방이 풍부해요.",
        menu: "코코넛밀크, 코코넛디저트",
        color: "#D2B48C",
    },

];

export default FruitList;