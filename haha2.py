# kunwadee(AT)cp.eng.chula.ac.th
# blockchain bankrupt game
# security 2/2017

# put transactions into block.  transactions must be exactly like this
# example.  be careful of the spaces.  must have 15 oldest pending
# transactions, oldest on the top.  must have \n at the end.

# new_block = """hash_of_prev_block
# sender_id coin_id receiver_id
# sender_id coin_id receiver_id
# sender_id coin_id receiver_id
# ...
# """

import hashlib

hash_of_genesis_block = '0'
hash_of_prev_block = hash_of_genesis_block # change this for newer blocks

new_block = hash_of_prev_block +'\n'+ \
"""5CF93EC7	5CF93EC700 7D702D97
8C12B376 8C12B37600 057B6924
756A688E 756A688E00	40D8FFC3
9BF58534 9BF5853400	756A688E
40D8FFC3 40D8FFC301	1695CA97
057B6924 057B692401	5ADA1B9B
1695CA97 057B692400	057B6924
1695CA97 1695CA9701	057B6924
057B6924 1695CA9700	5ADA1B9B
F559ABB5 F559ABB501	11BBA507
FBEC9E97 FBEC9E9701	40D8FFC3
0A61526E 0A61526E01	FBEC9E97
11BBA507 11BBA50700	1695CA97
DE2CE3E1 CF53B70600	5ADA1B9B
FBEC9E97 40D8FFC300	40D8FFC3

""" # make sure this last line has just the 3 quotes only

nonce = "999999999999999999"

hashed_val = hashlib.sha1((new_block+nonce).encode()).hexdigest()

# if hash_val does not start with 0000000, then keep finding another nonce
# in order to win.

while (not hashed_val.startswith('0000000')) :
    # change the nonce
    print(nonce)
    nonce = int(nonce)+1
    nonce=""+str(nonce)
    hashed_val = hashlib.sha1((new_block+nonce).encode()).hexdigest()


# if hash_val starts with 0000000, then your nonce creates a winning hash.
# hurry and publish the new block, nonce and the hashVal first to win.
print(new_block+nonce)
print(hashed_val)
