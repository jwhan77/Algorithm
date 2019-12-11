def multiply(number_string):
    multiply_list = []
    multiply_list.append(number_string)

    while len(number_string) > 1:
        multiply = 1
        for number in number_string:
            multiply = multiply * int(number)
        multiply_list.append(int(multiply))
        number_string = str(multiply)
    print(' '.join(str(m) for m in multiply_list))


def run():
    input_string_list = []
    input_string = input("")

    while input_string != "0":
        input_string_list.append(input_string)
        input_string = input("")

    for input_string in input_string_list:
        multiply(input_string)


run()