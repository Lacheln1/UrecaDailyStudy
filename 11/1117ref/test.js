function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5], // 1번 수포자의 찍기 패턴
        [2, 1, 2, 3, 2, 4, 2, 5], // 2번 수포자의 찍기 패턴
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번 수포자의 찍기 패턴
    ];
    //수포자들의 점수를 저장할 배열
    const scores = [0, 0, 0];

    //각 수포자의 패턴과 정답이 얼마나 일치하는지 확인
    for (const [i, answer] of answers.entries()) {
        for (const [j, pattern] of patterns.entries()) {
            if (answer === pattern[i % pattern.length]) {
                scores[j] += 1;
            }
        }
    }

    //가장 높은 점수 저장
    const maxScores = Math.max(...scores);

    //가장 높은 점수를 받은 수포자들의 번호를 찾아서 배열에 담음
    const highestScores = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScores) {
            highestScores.push(i + 1);
        }
    }

    return highestScores;
}
