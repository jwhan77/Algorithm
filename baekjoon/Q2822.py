import operator

def run():
    score = {}
    for i in range(1,9):
        score[i] = int(input())
    sorted_score = sorted(score.items(), key=operator.itemgetter(1), reverse=True)

    total_score = 0
    highscore_q = []
    for i in range(0,5):
        total_score += sorted_score[i][1]
        highscore_q.append(sorted_score[i][0])

    sorted_highscore_q = sorted(highscore_q)

    print(total_score)
    print(' '.join(str(x) for x in sorted_highscore_q))

run()