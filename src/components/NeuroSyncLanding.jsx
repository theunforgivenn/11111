import React, { useState, useEffect } from 'react';
import { ChevronRight, Bot, FileText, Palette, CheckCircle, Image, Users, ArrowRight, Play, Star, Quote, TrendingUp, Shield, Zap } from 'lucide-react';

const NeuroSyncLanding = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    });

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const agents = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Агент-Исследователь",
      description: "Собирает материалы из YouTube, статей и аудио, автоматически формирует базу знаний",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Агент-Писатель", 
      description: "Превращает заметки и идеи в структуру книги: оглавление, главы, черновики",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Агент-Стилист",
      description: "Поддерживает единый авторский голос на протяжении всей работы",
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Агент-Проверяющий",
      description: "Отслеживает ошибки, противоречия и нестыковки в тексте",
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Агент-Оформитель",
      description: "Создаёт обложки и изображения для глав автоматически",
      color: "bg-gradient-to-r from-indigo-500 to-blue-500"
    }
  ];

  const stats = [
    { value: "+50%", label: "Рост продуктивности", icon: <TrendingUp className="w-6 h-6" /> },
    { value: "0", label: "Критических ошибок", icon: <Shield className="w-6 h-6" /> },
    { value: "40%", label: "Времени освобождено", icon: <Zap className="w-6 h-6" /> }
  ];

  const beforeAfter = [
    { 
      metric: "Продуктивность",
      before: "Сильно снижена: до 40% времени уходило на рутину",
      after: "+50% рост, рутинные задачи занимают вдвое меньше времени",
      change: "+50%"
    },
    {
      metric: "Ошибки и нестыковки", 
      before: "Часто приходилось вручную перепроверять сюжет и факты",
      after: "0 критических ошибок благодаря многоуровневой проверке",
      change: "Устранены"
    },
    {
      metric: "Масштабирование",
      before: "Работал над одним проектом, боялся потерять фокус",
      after: "Ведет несколько проектов одновременно без потери качества", 
      change: "Без ограничений"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header, Hero, Problem, Solution, Results, CTA, Footer */}
      {/* Весь JSX-код как в оригинале */}
    </div>
  );
};

export default NeuroSyncLanding;