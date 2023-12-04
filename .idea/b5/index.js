// question : title, choices, answer, status
const questions = [
    {
        title: "Kết quả phép cộng 10 + 4 = ?",
        choices: ["12", "14", "16", "18"],
        answer: "14",
        selected: null,
        status: false,
    },
    {
        title: "Kết quả phép trừ 20 - 9 = ?",
        choices: ["7", "13", "11", "15"],
        answer: "11",
        selected: null,
        status: false,
    },
    {
        title: "Kết quả phép nhân 7 x 3 = ?",
        choices: ["21", "24", "25", "27"],
        answer: "21",
        selected: null,
        status: false,
    },
    {
        title: "Kết quả phép chia 8 : 2 = ?",
        choices: ["10", "2", "4", "6"],
        answer: "4",
        selected: null,
        status: false,
    },
    {
        title: "Kết quả phép cộng 8 + 2 = ?",
        choices: ["10", "2", "4", "6"],
        answer: "10",
        selected: null,
        status: false,
    },
];

let currentQuestionIndex = 0; // vị trí câu hỏi hiện tại
let score = 0; // điểm

const questionTitleEl = document.querySelector("#question p"); // tiêu đề câu hỏi
const choicesEl = document.querySelector(".choices"); // danh sách các lựa chọn
const btnNext = document.getElementById("btn-next"); // nút next
const btnFinish = document.getElementById("btn-finish"); // nút kết thúc
const progressBarEl = document.querySelector(".progress-bar"); // thanh progress bar
const questionNumberEl = document.querySelector(".question-number"); // số câu hỏi

// Hiện thị danh sách câu hỏi và các đáp án từng câu
const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    // Hiển thị tiêu đề câu hỏi
    questionTitleEl.innerHTML = `Câu ${currentQuestionIndex + 1} : ${
        currentQuestion.title
    }`;

    // Hiển thị danh sách các lựa chọn
    let choicesHtml = "";
    currentQuestion.choices.forEach((choice, index) => {
        // Kiểm tra lựa chọn người dùng trùng với choice không
        // Nếu trùng thì choice được checked
        // Khi chọn sẽ thực hiện sự kiện lưu đáp án của người dùng vào
        const isChecked = currentQuestion.selected === choice ? "checked" : "";
        choicesHtml += `
            <div class="choice-item">
                <input type="radio" name="choice" id="choice-${index}" value="${choice}" ${isChecked} onchange="saveAnswer('${choice}')">
                <label for="choice-${index}">${choice}</label>
            </div>
        `;
    });
    choicesEl.innerHTML = choicesHtml;

    updateProgressBar(); // Cập nhật progress bar

    renderQuestionNumber(); // Cập nhật số câu hỏi
};

// Số lượng câu hỏi có status === true
const getNumberOfSelectedQuestions = () => {
    const selectedQuestions = questions.filter(question => question.status === true);
    return selectedQuestions.length;
};

// Cập nhật progress bar
const updateProgressBar = () => {
    const numberOfSelectedQuestions = getNumberOfSelectedQuestions();

    // Tính phần trăm và cập nhật thanh progress bar
    const percent = (numberOfSelectedQuestions / questions.length) * 100;
    progressBarEl.style.width = `${percent}%`;
    progressBarEl.innerHTML = `${percent}%`;
};

//Lưu lại đáp án người dùng chọn
const saveAnswer = (selectedAnswer) => {
    questions[currentQuestionIndex].selected = selectedAnswer;
    questions[currentQuestionIndex].status = true;
    updateProgressBar();
};

// Kiểm tra câu hỏi đã được chọn chưa
const isQuestionSelected = (question) => {
    return question.status;
};

// Hiện thị danh sách các câu hỏi ứng với số
const renderQuestionNumber = () => {
    // Nếu câu hỏi đang là câu hỏi hiện tại áp dụng border-primary
    // Các câu hỏi status là false sẽ bị disabled
    // và khi click sẽ không có sự kiện xảy ra
    let html = "";
    questions.forEach((question, index) => {
        const isSelected = isQuestionSelected(question);
        html += `
        <div 
            class="rounded border py-2 px-3 me-2 ${
            index === currentQuestionIndex
                ? "border-primary"
                : isSelected
                    ? " "
                    : "disabled bg-black bg-opacity-10 pe-none"
        }"
            onclick="${
            isSelected ? `renderQuestionWithQuestionNumber(${index})` : ""
        }"
        >
            ${index + 1}
        </div>`;
    });
    questionNumberEl.innerHTML = html;
};

// Lấy câu hỏi được chọn
const renderQuestionWithQuestionNumber = (questionNumber) => {
    currentQuestionIndex = questionNumber;

    // Kiểm tra xem câu hỏi đang chọn có phải cuối không
    // Nếu phải hiện nút kết thúc
    // Không phải thì hiện nút next
    if(currentQuestionIndex === questions.length - 1){
        btnNext.classList.add("hide");
        btnFinish.classList.remove("hide");
    }else{
        btnNext.classList.remove("hide");
        btnFinish.classList.add("hide");
    }

    renderQuestion();
};

// Nút next
btnNext.addEventListener("click", () => {
    // Kiểm tra xem người dùng đã chọn đáp án chưa?
    // Nếu chọn rồi thì next
    // Nếu chưa chọn thông báo cho người dùng chọn đáp án
    const checkedChoice = document.querySelector("input[type=radio]:checked");
    if (!checkedChoice) {
        alert("Bạn chưa chọn đáp án!");
        return;
    }

    saveAnswer(checkedChoice.value); // Lưu đáp án của người dùng vào

    currentQuestionIndex++; // chuyển sang câu hỏi tiếp theo

    renderQuestion(); // render câu hỏi tiếp theo trên giao diện

    // ẩn nút next khi đến câu hỏi cuối cùng
    if (currentQuestionIndex === questions.length - 1) {
        btnNext.classList.add("hide");
        btnFinish.classList.remove("hide");
    }
});

btnFinish.addEventListener("click", () => {
    const checkedChoice = document.querySelector("input[type=radio]:checked");
    if (!checkedChoice) {
        alert("Bạn chưa chọn đáp án!");
        return;
    }

    saveAnswer(checkedChoice.value); // Lưu đáp án của người dùng vào

    // Tính điểm
    questions.forEach((question) => {
        if (question.answer === question.selected) {
            score++;
        }
    });

    alert(`Bạn đã trả lời đúng ${score} câu hỏi!`); // Thông báo
    score = 0;
});

renderQuestion();
