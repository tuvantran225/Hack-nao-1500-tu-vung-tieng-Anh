$(document).ready(function() {
    const word = {
        "additional": "bổ sung",
        "your application still needs additional information": "got it",
        "i will give you an additional assignment": "got it",
        "admit": "thừa nhận", 
        "i never admitted i did that": "got it",
        "he never admits when he makes mistake": "got it",
        "agree": "đồng ý", 
        "we can still work together if we don't agree": "got it",
        "announce(something)": "thông báo",
        "i will announce the news tomorrow": "got it",
        "apologize": "xin lỗi",
        "i apologize for the inconvenience": "got it",
        "there is no need to apologize": "got it",
        "approve": "tán thành",
        "argue": "tranh luận", 
        "blame": "khiển trách",
        "brief": "tóm tắt",
        "brochure":"cuốn sách nhỏ",
        "certain": "chắc",
        "comma": "dấu phẩy", 
        "complaint": "phàn nàn", 
        "complete": "hoàn thành",
        "conference": "hội nghị",
        "confirm": "xác nhận",
        "contact": "liên lạc", 
        "convince": "thuyết phục",
        "discuss": "thảo luận",
        "extreme":"vô cùng",
		"hint": "lời gợi ý",
        "hurry": "giục",
        "include": "bao gồm",
        "interact": "tương tác",
        "need": "cần",
        "order": "gọi món",
        "postcard": "bưu thiếp",
		"prepare": "chuẩn bị",
        "reason": "lý do",
        "stamp": "con tem",
        "whole": "toàn bộ",
        "almost": "hầu như",
        "confidence": "sự tự tin",
        "despite": "mặc dù",
        "emphasize": "nhấn mạnh",
        "express": "bày tỏ",
        "guess": "đoán",
        "imply": "ám chỉ",
        "inform(somebody)": "thông báo",
        "initial": "mở đầu",
        "idiom": "thành ngữ",
        "insist": "khăng khăng",
        "issue": "vấn đề",
        "mention": "đề cập",
        "interrupt": "gián đoạn",
        "material": "nguyên liệu"
    }

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    $('#play').click(function() {
        audioElement.play();
    });
    
    $('#replay').click(function() {
        audioElement.currentTime = 0;
    });
    
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