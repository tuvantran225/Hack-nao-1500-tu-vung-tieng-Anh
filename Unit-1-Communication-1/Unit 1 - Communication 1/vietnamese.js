$(document).ready(function() {
    const word = {
        "bổ sung": "additional",
        "ứng dụng của bạn vẫn cần thêm thông tin": "your application still needs additional information",
        "tôi sẽ cung cấp cho bạn một bài tập bổ sung": "i will give you an additional assignment",
        "thừa nhận": "admit",
        "tôi không bao giờ thừa nhận tôi đã làm điều đó": "i never admitted i did that",
        "anh ta không bao giờ thừa nhận khi anh ta nhầm lẫn": "he never admits when he makes mistake",
        "đồng ý": "agree",
        "chúng ta vẫn có thể làm việc cùng nhau nếu chúng ta không đồng ý": "we can still work together if we don't agree",
        "thông báo(something)": "announce",
        "tôi sẽ công bố tin tức vào ngày mai": "i will announce the news tomorrow",
        "xin lỗi": "apologize",
        "tôi xin lỗi vì sự bất tiện": "i apologize for the inconvenience",
        "không cần phải xin lỗi": "there is no need to apologize",
        "tán thành": "approve",
        "tranh luận": "argue", 
        "khiển trách": "blame",
        "tóm tắt": "brief",
        "cuốn sách nhỏ": "brochure",
        "chắc": "certain",
        "dấu phẩy": "comma", 
        "phàn nàn": "complaint", 
        "hoàn thành": "complete",
        "hội nghị": "conference",
        "xác nhận": "confirm",
        "liên lạc": "contact", 
        "thuyết phục": "convince",
        "thảo luận": "discuss",
        "vô cùng": "extreme",
		"lời gợi ý": "hint",
        "giục": "hurry",
        "bao gồm": "include",
        "tương tác": "interact",
        "cần": "need",
        "gọi món": "order",
        "bưu thiếp": "postcard",
        "chuẩn bị": "prepare",
        "lý do": "reason",
        "con tem": "stamp",
        "toàn bộ": "whole",
        "hầu như": "almost",
        "sự tự tin": "confidence",
        "mặc dù": "despite",
        "nhấn mạnh": "emphasize",
        "đoán": "guess",
        "ám chỉ": "imply",
        "thông báo(somebody)": "inform",
        "mở đầu": "initial",
        "thành ngữ": "idiom"
    }
    let start = new Date().getTime();
    let generated = generateWord();
    $("input[type='text']").focus();
    let score = 0;
    $("#generated").text(generated);
    $("form").submit(function(e) {
        e.preventDefault();
        if($("input[type='text']").val() === word[generated]) {
            generated = generateWord();
            $("#generated").text(generated);
            score++;
			$("input[type='text']").val("").focus();
        } else {
            let end = new Date().getTime();
			let time = end - start;
			let minutes = Math.floor(time / 60000);
			let seconds = ((time % 60000) / 1000).toFixed(0);
			alert("Your score: " + score + "\nTime spent: " + (seconds === 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds));
        }
    });

    // Random Key
    function generateWord() {
        return Object.keys(word)[Math.floor(Math.random()*Object.keys(word).length)];
    }
});