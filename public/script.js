document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('word-cloud-container');

    if (!container) {
        console.error("שגיאה: הקונטיינר חסר.");
        return;
    }

    const words = [
        'בריאות', 'שלווה', 'רוגע', 'איזון', 'אנרגיה', 'חיוניות', 'טבע',
        'נשימה', 'מדיטציה', 'תזונה', 'כושר', 'אורח חיים בריא', 'אלוורה',
        'ריפוי', 'צמיחה', 'מודעות', 'התחדשות', 'רגיעה', 'הרמוניה', 'גוף',
        'נפש', 'יוגה', 'מים', 'שמש', 'אוויר', 'ירוק', 'מרפא', 'טבעי'
    ];

    const numWords = 350;
    const wordElements = [];
    let targetPoints = [];

    // מערך הנקודות לצורת האלוורה
    const aloeShapePoints = [
        // Base Cluster (around 50, 90)
        { x: 49.8, y: 90.5 }, { x: 52.1, y: 88.2 }, { x: 47.5, y: 91.8 }, { x: 50.5, y: 86.9 }, { x: 46.2, y: 89.1 },
        { x: 53.8, y: 90.1 }, { x: 48.9, y: 92.5 }, { x: 51.2, y: 87.5 }, { x: 50.1, y: 90.8 }, { x: 47.0, y: 88.0 },
        { x: 54.5, y: 91.5 }, { x: 49.2, y: 86.5 }, { x: 52.8, y: 89.8 }, { x: 46.0, y: 92.0 }, { x: 51.9, y: 90.3 },
        { x: 48.1, y: 88.8 }, { x: 50.8, y: 89.5 }, { x: 49.5, y: 91.1 }, { x: 52.5, y: 87.1 }, { x: 47.8, y: 90.6 },
        { x: 53.1, y: 88.4 }, { x: 46.8, y: 89.9 }, { x: 50.3, y: 92.2 }, { x: 48.6, y: 87.8 }, { x: 51.5, y: 91.0 },
        { x: 49.0, y: 89.0 }, { x: 54.0, y: 88.6 }, { x: 47.2, y: 91.3 }, { x: 50.7, y: 86.7 }, { x: 46.5, y: 90.9 },
        { x: 53.5, y: 89.2 }, { x: 48.3, y: 92.7 }, { x: 51.0, y: 87.3 }, { x: 50.0, y: 88.1 }, { x: 47.7, y: 89.6 },
        { x: 52.2, y: 91.7 }, { x: 49.7, y: 87.0 }, { x: 53.3, y: 90.7 }, { x: 46.3, y: 88.3 }, { x: 51.7, y: 89.3 },
        { x: 48.8, y: 91.9 }, { x: 50.2, y: 88.9 }, { x: 49.3, y: 90.0 }, { x: 52.9, y: 88.7 }, { x: 47.9, y: 92.4 },
        // Central Leaf 1 (Tall)
        { x: 50.0, y: 87.3 }, { x: 50.1, y: 83.8 }, { x: 50.2, y: 79.9 }, { x: 50.3, y: 75.7 }, { x: 50.4, y: 71.3 },
        { x: 50.5, y: 66.7 }, { x: 50.6, y: 62.0 }, { x: 50.7, y: 57.3 }, { x: 50.7, y: 52.5 }, { x: 50.7, y: 47.8 },
        { x: 50.7, y: 43.2 }, { x: 50.6, y: 38.6 }, { x: 50.5, y: 34.1 }, { x: 50.4, y: 29.8 }, { x: 50.3, y: 25.6 },
        { x: 50.1, y: 21.5 }, { x: 50.0, y: 17.6 }, { x: 49.8, y: 14.0 }, { x: 49.6, y: 10.7 }, { x: 49.4, y: 7.8 },
        // Central Leaf 2 (Shorter, slight curve)
        { x: 50.5, y: 86.5 }, { x: 50.7, y: 82.0 }, { x: 50.9, y: 77.2 }, { x: 51.0, y: 72.1 }, { x: 51.2, y: 66.9 },
        { x: 51.3, y: 61.6 }, { x: 51.4, y: 56.3 }, { x: 51.4, y: 51.0 }, { x: 51.4, y: 45.8 }, { x: 51.4, y: 40.7 },
        { x: 51.3, y: 35.8 }, { x: 51.2, y: 31.1 }, { x: 51.1, y: 26.6 }, { x: 50.9, y: 22.4 }, { x: 50.8, y: 18.6 },
        // Left Upper Leaf
        { x: 47.0, y: 87.8 }, { x: 45.8, y: 84.5 }, { x: 44.4, y: 80.9 }, { x: 42.9, y: 77.0 }, { x: 41.3, y: 73.0 },
        { x: 39.6, y: 68.8 }, { x: 37.8, y: 64.5 }, { x: 36.0, y: 60.1 }, { x: 34.2, y: 55.7 }, { x: 32.4, y: 51.3 },
        { x: 30.6, y: 46.9 }, { x: 28.9, y: 42.6 }, { x: 27.3, y: 38.4 }, { x: 25.8, y: 34.4 }, { x: 24.4, y: 30.6 },
        // Right Upper Leaf
        { x: 53.0, y: 87.8 }, { x: 54.2, y: 84.5 }, { x: 55.6, y: 80.9 }, { x: 57.1, y: 77.0 }, { x: 58.7, y: 73.0 },
        { x: 60.4, y: 68.8 }, { x: 62.2, y: 64.5 }, { x: 64.0, y: 60.1 }, { x: 65.8, y: 55.7 }, { x: 67.6, y: 51.3 },
        { x: 69.4, y: 46.9 }, { x: 71.1, y: 42.6 }, { x: 72.7, y: 38.4 }, { x: 74.2, y: 34.4 }, { x: 75.6, y: 30.6 },
        // Left Lower Leaf
        { x: 45.0, y: 90.0 }, { x: 43.5, y: 87.1 }, { x: 41.8, y: 83.9 }, { x: 40.0, y: 80.5 }, { x: 38.1, y: 76.9 },
        { x: 36.1, y: 73.1 }, { x: 34.1, y: 69.2 }, { x: 32.0, y: 65.1 }, { x: 30.0, y: 61.0 }, { x: 28.0, y: 56.9 },
        { x: 26.1, y: 52.8 }, { x: 24.3, y: 48.7 }, { x: 22.6, y: 44.7 }, { x: 21.0, y: 40.8 }, { x: 19.5, y: 37.0 },
        // Right Lower Leaf
        { x: 55.0, y: 90.0 }, { x: 56.5, y: 87.1 }, { x: 58.2, y: 83.9 }, { x: 60.0, y: 80.5 }, { x: 61.9, y: 76.9 },
        { x: 63.9, y: 73.1 }, { x: 65.9, y: 69.2 }, { x: 68.0, y: 65.1 }, { x: 70.0, y: 61.0 }, { x: 72.0, y: 56.9 },
        { x: 73.9, y: 52.8 }, { x: 75.7, y: 48.7 }, { x: 77.4, y: 44.7 }, { x: 79.0, y: 40.8 }, { x: 80.5, y: 37.0 },
        // Inner Left Small Leaf
        { x: 48.0, y: 87.0 }, { x: 47.5, y: 84.2 }, { x: 46.9, y: 81.2 }, { x: 46.2, y: 78.0 }, { x: 45.5, y: 74.7 },
        { x: 44.8, y: 71.3 }, { x: 44.0, y: 67.8 }, { x: 43.2, y: 64.3 }, { x: 42.4, y: 60.8 }, { x: 41.7, y: 57.3 },
        // Inner Right Small Leaf
        { x: 52.0, y: 87.0 }, { x: 52.5, y: 84.2 }, { x: 53.1, y: 81.2 }, { x: 53.8, y: 78.0 }, { x: 54.5, y: 74.7 },
        { x: 55.2, y: 71.3 }, { x: 56.0, y: 67.8 }, { x: 56.8, y: 64.3 }, { x: 57.6, y: 60.8 }, { x: 58.3, y: 57.3 },
        // Filler Points (Adding density within the shape)
        { x: 52.4, y: 75.1 }, { x: 47.8, y: 68.3 }, { x: 55.1, y: 59.9 }, { x: 43.7, y: 72.8 }, { x: 58.9, y: 65.2 },
        { x: 40.5, y: 80.4 }, { x: 61.3, y: 70.7 }, { x: 49.1, y: 55.6 }, { x: 50.9, y: 48.2 }, { x: 46.5, y: 62.0 },
        { x: 53.5, y: 52.5 }, { x: 38.2, y: 76.6 }, { x: 63.8, y: 61.8 }, { x: 44.9, y: 45.0 }, { x: 56.2, y: 38.7 },
        { x: 35.7, y: 69.5 }, { x: 66.1, y: 54.3 }, { x: 50.4, y: 30.1 }, { x: 48.0, y: 40.9 }, { x: 52.0, y: 35.5 },
        { x: 33.1, y: 60.2 }, { x: 68.5, y: 47.1 }, { x: 42.3, y: 50.8 }, { x: 59.7, y: 42.4 }, { x: 30.8, y: 53.4 },
        { x: 71.0, y: 40.0 }, { x: 49.5, y: 20.5 }, { x: 50.5, y: 25.0 }, { x: 28.5, y: 48.0 }, { x: 73.2, y: 36.2 },
        { x: 47.1, y: 32.7 }, { x: 54.8, y: 28.9 }, { x: 26.7, y: 43.1 }, { x: 75.4, y: 33.5 }, { x: 51.6, y: 65.7 },
        { x: 48.2, y: 78.9 }, { x: 53.9, y: 71.4 }, { x: 45.3, y: 85.1 }, { x: 57.0, y: 79.3 }, { x: 41.9, y: 88.0 },
        { x: 60.2, y: 82.6 }, { x: 49.9, y: 60.5 }, { x: 51.1, y: 51.7 }, { x: 46.0, y: 70.2 }, { x: 55.5, y: 56.0 },
        { x: 39.8, y: 81.5 }, { x: 62.5, y: 74.0 }, { x: 44.1, y: 58.4 }, { x: 58.0, y: 49.6 }, { x: 37.5, y: 73.9 },
        { x: 65.0, y: 66.8 }, { x: 50.6, y: 42.1 }, { x: 48.5, y: 53.7 }, { x: 52.6, y: 46.3 }, { x: 34.8, y: 67.4 },
        { x: 67.3, y: 59.1 }, { x: 43.0, y: 63.5 }, { x: 59.0, y: 54.8 }, { x: 32.5, y: 58.6 }, { x: 70.1, y: 50.3 },
        { x: 49.7, y: 28.0 }, { x: 50.3, y: 33.3 }, { x: 29.9, y: 51.2 }, { x: 72.4, y: 44.5 }, { x: 47.6, y: 38.8 },
        { x: 54.1, y: 34.6 }, { x: 27.9, y: 46.5 }, { x: 74.3, y: 41.7 }, { x: 51.3, y: 69.0 }, { x: 48.7, y: 81.1 },
        { x: 53.2, y: 76.2 }, { x: 45.9, y: 86.3 }, { x: 56.6, y: 80.8 }, { x: 42.7, y: 89.4 }, { x: 59.5, y: 84.2 },
        { x: 49.6, y: 64.1 }, { x: 51.8, y: 57.9 }, { x: 46.6, y: 73.8 }, { x: 55.0, y: 62.4 }, { x: 40.9, y: 83.0 }
    ];

    // --- פונקציה ליצירת נקודות יעד ---
    function sampleImageAndCreatePoints() {
        try {
            const containerWidth = container.clientWidth;
            const containerHeight = container.clientHeight;

            if (containerWidth === 0 || containerHeight === 0) {
                console.error("שגיאה: לא ניתן לקבל מידות של הקונטיינר.");
                setTimeout(sampleImageAndCreatePoints, 200);
                return;
            }

            // שימוש בנקודות המוגדרות מראש
            targetPoints = aloeShapePoints;

            console.log(`נוצרו ${targetPoints.length} נקודות יעד.`);

            // כעת, לאחר שיש נקודות יעד, צור את המילים והתחל את התהליך
            setupAnimation();

        } catch (e) {
            console.error("שגיאה ביצירת נקודות:", e);
            alert("אירעה שגיאה ביצירת נקודות. בדוק את ה-Console לפרטים.");
        }
    }

    // --- פונקציה להגדרת האנימציה (יצירת מילים ותזמון איסוף) ---
    function setupAnimation() {
        createWords();
        // המתן קצת לפני תחילת האיסוף
        setTimeout(gatherAndReveal, 4000); // המתן 4 שניות
    }

    // --- יצירת המילים במיקום התחלתי ---
    function createWords() {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        if (containerWidth === 0 || containerHeight === 0) {
            console.warn("מידות קונטיינר 0 ביצירת מילים, ממתין...");
            setTimeout(createWords, 100);
            return;
        }

        container.querySelectorAll('.word').forEach(el => el.remove()); // נקה מילים קודמות
        wordElements.length = 0;

        for (let i = 0; i < numWords; i++) {
            const wordElement = document.createElement('span');
            wordElement.classList.add('word');
            wordElement.textContent = words[Math.floor(Math.random() * words.length)];

            // גודל פונט אקראי קטן
            const initialSize = 8 + Math.random() * 6; // 8px - 14px
            wordElement.style.fontSize = `${initialSize}px`;

            wordElement.style.opacity = '0';
            // מיקום התחלתי מחוץ לקונטיינר (או בקצה)
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.max(containerWidth, containerHeight) * (0.6 + Math.random() * 0.5);
            const startX = containerWidth / 2 + Math.cos(angle) * radius;
            const startY = containerHeight / 2 + Math.sin(angle) * radius;
            wordElement.style.transform = `translate(${startX}px, ${startY}px) scale(0.5)`; // התחל רחוק וקטן

            container.appendChild(wordElement);
            wordElements.push(wordElement);

            // הפעלה מושהית של הופעה ראשונית (תנועה קלה פנימה)
            requestAnimationFrame(() => {
                setTimeout(() => {
                    try {
                        wordElement.style.opacity = '1';
                        // תנועה קלה לכיוון המרכז וגדילה
                        const intermediateX = containerWidth / 2 + (Math.random() - 0.5) * containerWidth * 0.8;
                        const intermediateY = containerHeight / 2 + (Math.random() - 0.5) * containerHeight * 0.8;
                        wordElement.style.transform = `translate(${intermediateX}px, ${intermediateY}px) scale(1)`;
                    } catch (e) { console.error("שגיאה בהופעה ראשונית:", e); }
                }, 50 + Math.random() * 1500);
            });
        }
    }

    // --- איסוף המילים לצורה הסופית ---
    function gatherAndReveal() {
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        if (containerWidth === 0 || containerHeight === 0 || targetPoints.length === 0 || wordElements.length === 0) {
            console.error("שגיאה: חסרים נתונים חיוניים לאיסוף.");
            setTimeout(gatherAndReveal, 500);
            return;
        }

        console.log("מתחיל איסוף...");

        wordElements.forEach((wordElement, index) => {
            try {
                // בחירת נקודת יעד מהמערך (עם חזרה)
                const targetPoint = targetPoints[index % targetPoints.length];

                const jitterX = (Math.random() - 0.5) * 5; // רעש קטן יותר
                const jitterY = (Math.random() - 0.5) * 5;

                // חישוב מיקום פיקסלי סופי בתוך הקונטיינר
                let targetX = (targetPoint.x / 100) * containerWidth + jitterX;
                let targetY = (targetPoint.y / 100) * containerHeight + jitterY;

                // הגבלת קואורדינטות (ליתר ביטחון)
                targetX = Math.max(0, Math.min(targetX, containerWidth - wordElement.offsetWidth));
                targetY = Math.max(0, Math.min(targetY, containerHeight - wordElement.offsetHeight));

                const finalScale = 0.6 + Math.random() * 0.3; // סקלה סופית קטנה יותר

                // החלת מיקום, סקלה ואולי שינוי צבע/שקיפות
                wordElement.style.transform = `translate(${targetX}px, ${targetY}px) scale(${finalScale})`;
                wordElement.style.color = '#e0ffe0'; // צבע ירוק בהיר מאוד, כמעט לבן
                wordElement.style.opacity = '0.8'; // אפשר להוריד שקיפות מעט בסוף

            } catch (e) {
                console.error("שגיאה בעיבוד מילה באיסוף:", e, wordElement, index);
            }
        });
    }

    // --- התחלת התהליך ---
    sampleImageAndCreatePoints();

    // --- (אופציונלי) עדכון בשינוי גודל חלון ---
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            console.log("Window resized, recalculating...");
            if (targetPoints.length > 0) {
                setupAnimation();
            } else {
                console.warn("שינוי גודל חלון, אך אין נקודות יעד עדיין.");
            }
        }, 500);
    });
});