# Array 5.2

import copy

testcase = 3

input1 = [1, 2, 9]
output1 = [1, 3, 0]

input2 = [1, 9, 9]
output2 = [2, 0, 0]

input3 = [9, 9, 9]
output3 = [1, 0, 0, 0]

arr = copy.deepcopy(input3)


def run():
    # 무식하게 푼 해답 1

    # 해답지 : 시간 복잡도 O(n)
    result = copy.deepcopy(arr)

    index = len(arr) - 1
    up = True
    while (index >= 0):
        value = result[index]
        if up:
            value += 1
            result[index] = value
            up = False
        if value == 10:
            result[index] = 0

            if index == 0:
                result.insert(0, 1)
                break
            up = True
        else:
            break
        index -= 1

    return result


def solution2():
    # 간단할 줄 알았는데 오히려 타입 생각해야해서 더 복잡.
    # 딱 봐도 위 코드보다 훨씬 비효율적으로 보인다.

    # 해답지
    # 이게 젤 무식하게 생각할 수 있는 방법
    # 프로그램 언어에서 정한 정수의 범위에 한해서만 작동하고, 그 범위를 벗어나는 값에 대해선 동작하지 않음.

    result = list(map(str, arr))
    print(result)

    # element가 str 이어야만 join 사용가능
    # converted_str = ''.join(result)
    # print(converted_str)

    converted = int(''.join(result))
    print(converted)

    plusone = list(str(converted + 1))
    result = list(map(int, plusone))
    return result


def check(result):
    return result == output3

result = run()
print(result)
correct = check(result)
print(correct)