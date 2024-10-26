"use strict";

export const weekDaysNames = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado",
];

export const monthNames = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

/**
 *
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Data String. formato: "Domingo 10, Jan"
 */
export const getDate = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const weekDayName = weekDaysNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

/**
 *
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. formato: "HH:MM AM/PM"
 */
export const getTime = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours > 11 ? "PM" : "AM";
  return `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
};

/**
 *
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time String. formato: "HH AM/PM"
 */
export const getHours = function (dateUnix, timezone) {
  const date = new Date((dateUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes(); 
  const period = hours > 11 ? "PM" : "AM";
  return `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
};

/**
 *
 * @param {number} mps Metros por segundo
 * @returns {number} Quilômetros por hora
 */
export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const aqiText = {
  1: {
    level: "Bom",
    message:
      "A qualidade do ar é considerada satisfatória, a poluição do ar está em pequenas partes ou nenhuma.",
  },
  2: {
    level: "Razoável",
    message:
      "A qualidade do ar é aceitável; no entanto, para um número muito pequeno de pessoas, excepcionalmente aquelas com um problema moderado de saúde, pode haver incômodo.",
  },
  3: {
    level: "Moderado",
    message:
      "Membros de grupos sensíveis podem sofrer efeitos na saúde. O público em geral provavelmente não será afetado.",
  },
  4: {
    level: "Ruim",
    message:
      "Todos podem começar a sentir efeitos na saúde; membros de grupos sensíveis podem sofrer efeitos mais graves para a saúde.",
  },
  5: {
    level: "Muito Ruim",
    message:
      "Advertências de saúde sobre condições de emergência. Toda a população tem maior probabilidade de ser afetada.",
  },
};
