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

//행렬의 곱셈
function solution(arr1, arr2) {
    //행렬 arr1과 arr2의 행과 열의 수
    const row1 = arr1.length;
    const col1 = arr1[0].length;

    const row2 = arr2.length;
    const col2 = arr2[0].length;

    //결과를 저장할 2차원 배열 초기화
    const ret = [];
    for (let i = 0; i < row1; i++) {
        ret.push(new Array(col2).fill(0));
    }

    // 첫 번째 행렬 arr1의 각 행과 두 번째 행렬 arr2의 각 열에 대해
    for (let i = 0; i < row1; i++) {
        for (let j = 0; j < col2; j++) {
            // 두 행렬의 데이터를 곱해 결과 배열에 더해줌
            for (let k = 0; k < col1; k++) {
                ret[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }

    return ret;
}
