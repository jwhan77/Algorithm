def solution(phone_book):
    phone_book.sort()
    for index, phone_number in enumerate(phone_book):
        phone_number_length = len(phone_number)
        if phone_book[index+1][0:phone_number_length] == phone_number:
            return False
    return True