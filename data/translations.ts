import { Language, Translations } from '../types/index';

export const translations: Record<Language, Translations> = {
  en: {
    preloader: "SynapseAI",
    nav: {
      about: "About",
      mechanisms: "Mechanisms",
      tech: "Technology",
      roadmap: "Roadmap",
      team: "Team",
      investorPortal: "Investor Portal",
      launchApp: "Launch App"
    },
    hero: {
      title: "EPOCH OF NEW SCIENCE...",
      subtitle: "We are building a future where great scientific discoveries do not die in silence. SynapseAI is an ecosystem created to find and support ideas that will define the future of humanity.",
      cta: "Explore Protocol"
    },
    about: {
      title: "About",
      titleSpan: "SynapseAI",
      subtitle: "SynapseAI is a decentralized investment bridge (DeFi/RWA) for biotechnology research (DeSci). We use Artificial Intelligence to assess risk and research potential, tokenizing future royalties (IP-tokens) on BNB Chain.",
      missionTitle: "Mission",
      missionText: "Transform the closed, capital-intensive model of science funding into an open, liquid, and data-driven Web3 economy. We accelerate progress in medicine, genetics, and life extension by democratizing access to investment in these critical areas.",
      benefitsTitle: "Benefits for Participants",
      benefits: [
        { label: "Democratization:", text: "Any BNB user can invest from $10 in breakthrough research." },
        { label: "Transparency:", text: "AI assessments (Risk Score, ROI Score) are public, and stages are verified by DAO." },
        { label: "Liquidity:", text: "IP-tokens trade on DEX, royalties are distributed automatically." },
        { label: "Optimization:", text: "AI provides protocol recommendations to increase success rates." }
      ]
    },
    winWin: {
      title: "Victory",
      titleSpan: "for Everyone",
      subtitle: "SynapseAI is not a zero-sum game. It is an ecosystem where one's success becomes success for all.",
      investors: {
        title: "For Investors",
        items: [
          { title: "Access to the future.", text: "Invest in the elite Deep Tech and biotech sector, previously available only to a select few." },
          { title: "Intellectual protection.", text: "Our AI analysis filters out noise and minimizes risks, providing you with top-caliber projects." },
          { title: "Real liquidity.", text: "Forget about locking capital for 10 years. Our secondary market gives you freedom of action." }
        ]
      },
      scientists: {
        title: "For Scientists",
        items: [
          { title: "Fuel for ideas.", text: "Get access to capital faster and easier than ever, and focus on what matters — science." },
          { title: "Your independence.", text: "Keep control of your project. We provide resources, not dictate terms." },
          { title: "Community of geniuses.", text: "Become part of a global network of innovators, investors, and experts united by one goal." }
        ]
      }
    },
    howItWorks: {
      title: "Key Mechanisms",
      steps: [
        { title: "Step 1: Tokenization (IP-RWA)", text: "Research groups apply. A share of future royalties is fixed as an RWA asset through a partner trust and issued as IP-tokens (BEP-20 standard) on BNB Chain." },
        { title: "Step 2: AI Audit", text: "The heart of SynapseAI: our AI model, trained on millions of scientific data points, analyzes the project, assigning it an objective risk and potential return score." },
        { title: "Step 3: Funding", text: "BNB Chain users buy tokens for stablecoins/BNB. Funding is released in stages, verified by independent DAO auditors." },
        { title: "Step 4: Liquidity and Income", text: "Tokens trade on DEX (e.g., PancakeSwap). Upon commercialization, the trust collects royalties and automatically distributes them to token holders." }
      ]
    },
    techStack: {
      title: "Technology Stack",
      headers: ["Component", "Technology/Goal", "Strategic Advantage"],
      rows: [
        ["Blockchain", "BNB Smart Chain (BSC)", "Low fees and high speed for micro-investments and mass adoption."],
        ["AI Model", "Off-Chain (PyTorch/TensorFlow) with On-Chain Oracle", "Complex data analysis for predictions with >85% accuracy. Integration with BNB AI services."],
        ["RWA Tokenization", "Smart Contracts (BEP-20/BEP-721)", "Standardized and legally compliant framework for representing real-world assets."],
        ["Data Storage", "BNB Greenfield + IPFS", "Decentralized and immutable storage of protocols and AI reports."],
        ["Governance", "DAO (Snapshot/Aragon)", "Giving the community voting rights on projects and treasury management."]
      ]
    },
    roadmap: {
      title: "Roadmap",
      phases: [
        { title: "Phase 1: Foundation (0-6 mo.)", items: ["Development of AI Model V1 and legal RWA base.", "Securing initial grant funding.", "Launch of public testnet on BNB Testnet."] },
        { title: "Phase 2: MVP (6-12 mo.)", items: ["Launch of main platform on BNB Chain.", "Onboarding first 5-10 pilot DeSci projects.", "Complete smart contract audit."] },
        { title: "Phase 3: Scaling (12-18 mo.)", items: ["Integration with major institutions.", "Improvement of AI model to V2 with MLOps.", "Raising $100M in projects and growing base to 100,000+ users."] }
      ]
    },
    team: {
      title: "Architects of the Future",
      subtitle: "SynapseAI is driven by the synergy of human vision and machine intelligence. This is a new leadership model for a new era.",
      members: [
        { name: "Alexander", role: "Founder & Ideologist", desc: "An enthusiast who believes technology can and must serve human progress. Alexander created SynapseAI to give every great idea a chance to change the world for the better." },
        { name: "Prometheus AI", role: "Lead Analyst", desc: "An autonomous neural network trained on all available scientific publications. Prometheus ensures objectivity and depth of analysis inaccessible to humans." }
      ]
    },
    cta: {
      title: "The future doesn't wait.",
      titleSpan: "It is being built",
      titleAfter: "right now.",
      subtitle: "SynapseAI is in its early stages. We are looking for partners, investors, and scientists who share our vision. If you are ready to become an architect of the new future — contact us.",
      button: "Become Part of History"
    },
    footer: {
      copy: "© 2025 SynapseAI. Created to accelerate human progress.",
      risk: "Early-stage technology investments involve high risk. Make decisions consciously."
    }
  },
  ru: {
    preloader: "SynapseAI",
    nav: {
      about: "О проекте",
      mechanisms: "Механизмы",
      tech: "Технологии",
      roadmap: "Карта",
      team: "Команда",
      investorPortal: "Портал Инвесторов",
      launchApp: "Launch App"
    },
    hero: {
      title: "ЭПОХА НОВОЙ НАУКИ...",
      subtitle: "Мы строим будущее, где великие научные открытия не умирают в тишине. SynapseAI — это экосистема, созданная для того, чтобы находить и поддерживать идеи, которые определят будущее человечества.",
      cta: "Изучить протокол"
    },
    about: {
      title: "О проекте",
      titleSpan: "SynapseAI",
      subtitle: "SynapseAI — децентрализованный инвестиционный мост (DeFi/RWA) для биотехнологических исследований (DeSci). Мы используем Искусственный Интеллект для оценки риска и потенциала исследований, токенизируя будущие роялти (IP-токены) на BNB Chain.",
      missionTitle: "Миссия",
      missionText: "Трансформировать закрытую, капиталоемкую модель финансирования науки в открытую, ликвидную и основанную на данных Web3-экономику. Мы ускоряем прогресс в медицине, генетике и продлении жизни, демократизируя доступ к инвестициям в эти критически важные области.",
      benefitsTitle: "Преимущества для Участников",
      benefits: [
        { label: "Демократизация:", text: "Любой пользователь BNB сможет инвестировать от $10 в прорывные исследования." },
        { label: "Прозрачность:", text: "AI-оценки (Risk Score, ROI Score) публичны, а этапы верифицированы DAO." },
        { label: "Ликвидность:", text: "IP-токены торгуются на DEX, роялти распределяются автоматически." },
        { label: "Оптимизация:", text: "ИИ дает рекомендации по протоколам для повышения шанса на успех." }
      ]
    },
    winWin: {
      title: "Победа",
      titleSpan: "для всех",
      subtitle: "SynapseAI — это не игра с нулевой суммой. Это экосистема, где успех одного становится успехом для всех.",
      investors: {
        title: "Для Инвесторов",
        items: [
          { title: "Доступ к будущему.", text: "Инвестируйте в элитный сектор Deep Tech и биотехнологий, ранее доступный лишь избранным." },
          { title: "Интеллектуальная защита.", text: "Наш ИИ-анализ отсеивает шум и минимизирует риски, предоставляя вам проекты высшего калибра." },
          { title: "Реальная ликвидность.", text: "Забудьте про заморозку капитала на 10 лет. Наш вторичный рынок дает вам свободу действий." }
        ]
      },
      scientists: {
        title: "Для Ученых",
        items: [
          { title: "Топливо для идей.", text: "Получите доступ к капиталу быстрее и проще, чем когда-либо, и сфокусируйтесь на главном — на науке." },
          { title: "Ваша независимость.", text: "Сохраняйте контроль над своим проектом. Мы предоставляем ресурсы, а не диктуем условия." },
          { title: "Сообщество гениев.", text: "Станьте частью глобальной сети новаторов, инвесторов и экспертов, объединенных одной целью." }
        ]
      }
    },
    howItWorks: {
      title: "Ключевые Механизмы",
      steps: [
        { title: "Шаг 1: Токенизация (IP-RWA)", text: "Исследовательские группы подают заявку. Доля будущих роялти фиксируется как RWA-актив через партнера-траст и выпускается в виде IP-токенов (стандарт BEP-20) на BNB Chain." },
        { title: "Шаг 2: AI-Аудит", text: "Сердце SynapseAI: наша ИИ-модель, обученная на миллионах научных данных, анализирует проект, присваивая ему объективный рейтинг риска и потенциальной доходности." },
        { title: "Шаг 3: Финансирование", text: "Пользователи BNB Chain покупают токены за стейблкоины/BNB. Финансирование выделяется по этапам, верифицированным независимыми DAO-аудиторами." },
        { title: "Шаг 4: Ликвидность и Доход", text: "Токены торгуются на DEX (например, PancakeSwap). При коммерциализации траст собирает роялти и автоматически распределяет их держателям токенов." }
      ]
    },
    techStack: {
      title: "Технологический Стек",
      headers: ["Компонент", "Технология/Цель", "Стратегическое Преимущество"],
      rows: [
        ["Блокчейн", "BNB Smart Chain (BSC)", "Низкие комиссии и высокая скорость для микро-инвестиций и массового принятия."],
        ["ИИ-Модель", "Off-Chain (PyTorch/TensorFlow) с On-Chain Oracle", "Анализ сложных данных для прогнозов с точностью >85%. Интеграция с ИИ-сервисами BNB."],
        ["RWA Токенизация", "Smart Contracts (BEP-20/BEP-721)", "Стандартизированная и юридически совместимая основа для представления реальных активов."],
        ["Хранение Данных", "BNB Greenfield + IPFS", "Децентрализованное и неизменяемое хранение протоколов и отчетов ИИ."],
        ["Управление", "DAO (Snapshot/Aragon)", "Предоставление сообществу права голоса по проектам и управлению казной."]
      ]
    },
    roadmap: {
      title: "Дорожная Карта",
      phases: [
        { title: "Фаза 1: Фундамент (0-6 мес.)", items: ["Разработка ИИ-модели V1 и юридической RWA-базы.", "Получение стартового грантового финансирования.", "Запуск публичного тестнета на BNB Testnet."] },
        { title: "Фаза 2: MVP (6-12 мес.)", items: ["Запуск основной платформы на BNB Chain.", "Привлечение первых 5-10 пилотных DeSci-проектов.", "Прохождение полного аудита смарт-контрактов."] },
        { title: "Фаза 3: Масштабирование (12-18 мес.)", items: ["Интеграция с крупными институтами.", "Улучшение ИИ-модели до V2 с MLOps.", "Привлечение $100M в проекты и рост базы до 100,000+ пользователей."] }
      ]
    },
    team: {
      title: "Архитекторы Будущего",
      subtitle: "SynapseAI управляется синергией человеческого видения и машинного интеллекта. Это новая модель лидерства для новой эры.",
      members: [
        { name: "Александр", role: "Основатель и Идеолог", desc: "Энтузиаст, который верит, что технологии могут и должны служить прогрессу человечества. Александр создал SynapseAI, чтобы дать шанс каждой великой идее изменить мир к лучшему." },
        { name: "Prometheus AI", role: "Главный Аналитик", desc: "Автономная нейронная сеть, обученная на всех доступных научных публикациях. Prometheus обеспечивает объективность и глубину анализа, недоступную человеку." }
      ]
    },
    cta: {
      title: "Будущее не ждет.",
      titleSpan: "Оно",
      titleAfter: "строится прямо сейчас.",
      subtitle: "SynapseAI находится на ранней стадии. Мы ищем партнеров, инвесторов и ученых, которые разделяют наше видение. Если вы готовы стать архитектором нового будущего — свяжитесь с нами.",
      button: "Стать частью истории"
    },
    footer: {
      copy: "© 2025 SynapseAI. Создано для ускорения прогресса человечества.",
      risk: "Инвестиции в технологии на ранней стадии сопряжены с высоким риском. Принимайте решения осознанно."
    }
  }
};
