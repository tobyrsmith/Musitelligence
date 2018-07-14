# Musitelligence

Music is a highly versatile art that originates in nature, and has been taken up by mankind as a way of expression and also as an art.
Now, it's going to be taken up by machines as well.
-
This project aims to create a library that implements all of music theory(in all it's forms) in code, then create AI that will use that theory, math, and neuroscience to compose music in different styles and genres.

----------------------------------------------------------------------
##### TO DO:
1. 

> “Everything is determined … by forces over which we have no
> control. It is determined for the insects as well as for the star.
> Human beings, vegetables, or cosmic dust – we all dance to a
> mysterious tune, intoned in the distance by an invisible piper.”
> – Albert Einstein



## Scales:

| Scale | W/H Note | Semi - Tones(from interval) | Semi Tones(from Tonic) |
| :-: | :---------------: | :---------------: | :---------------: |
| Major scale | W, W, H, W, W, W, H | [2, 2, 1, 2, 2, 2, 1] | [2, 4, 5, 7, 9, 11, 12] | [2, 4, 5, 7, 9, 11, 12] |
| Natuaral Minor scale | W, H, W, W, H, W, W | [2, 1, 2, 2, 1, 2, 2] | [2, 3, 5, 7, 8, 10, 12] | [2, 3, 5, 7, 8, 10, 12] |
| Harmonic Minor scale | W, H, W, W, H, WH, H | [2, 1, 2, 2, 1, 3, 1] | [2, 3, 5, 7, 8, 11, 12] |
| Melodic Minor scale | W, H, W, W, W, W, H | [2, 1, 2, 2, 2, 2, 1] | [2, 3, 5, 7, 9, 11, 12] |
| Ionian scale | W, W, H, W, W, W, H | [2, 2, 1, 2, 2, 2, 1] | [2, 4, 5, 7, 9, 11, 12] |
| Dorian scale | W, H, W, W, W, H, W | [2, 1, 2, 2, 2, 1, 2] | [2, 3, 5, 7, 9, 10, 12] |
| Phrygian scale | H, W, W, W, H, W, W | [1,2,2,2,1,2,2] | [1, 3, 5, 7, 8, 10, 12] |
| Lydian scale | W, W, W, H, W, W, W | [2,2,2,1,2,2,1] | [2, 4, 6, 7, 9, 11, 12] |
| Mixolydian scale | W, W, H, W, W, H, W	| [2,2,1,2,2,1,2] | [2, 4, 5, 7, 9, 10, 12] |
| Aeolian scale | W, H, W, W, H, W, W	| [2, 1, 2, 2, 1, 2, 2] | [2, 3, 5, 7, 8, 10, 12] |
| Locrian scale | H, W, W, H, W, W, W | [1,2,2,1,2,2,2] | [1, 3, 5, 6, 8, 10, 12] |
| Major pentatonic scale | W, W, WH, W, WH	| [2, 2, 3, 2, 3] | [2, 4, 7, 9, 12] |
| Minor pentatonic scale |	WH, W, W, WH, W	| [3, 2, 2, 3, 2] | [3, 5, 7, 10, 12] |
| Blues scale | WH, W, H, H, WH, W | [3, 2, 1, 1, 3, 2] | [3, 5, 6, 7, 10, 12] |
| Whole tone scale | W, W, W, W, W, W | [2, 2, 2, 2, 2, 2] | [2, 4, 6, 8, 10, 12] |
| Whole, Half Diminished | W, H, W, H, W, H, W, H | [2, 1, 2, 1, 2, 1, 2, 1] | [2, 3, 5, 6, 8, 9, 11, 12] |
| Half, Whole Diminished | H, W, H, W, H, W, H, W | [1, 2, 1, 2, 1, 2, 1, 2] | [1, 3, 4, 6, 7, 9, 10, 12] |

## Chords

### Major Chords
|	Chord Type	|	Symbol	|	Formula	|
|	:-----:	|	:-----:	|	:-----:	|
|	Major	|	M, Maj	|	[1, 3, 5]	|
|	Added Fourth	|	add4	|	[1, 3, 4, 5]	|
|	Sixth	|	6	|	[1, 3, 5, 6]	|
|	Six Nine	|	06/09/18	|	[1, 3, 5, 6, 9]	|
|	Major 7th	|	Maj7	|	[1, 3, 5, 7]	|
|	Major Ninth	|	Maj9	|	[1, 3, 5, 7, 9]	|
|	Major Eleventh	|	Maj11	|	[1, 3, 5, 7,  (9), 11]	|
|	Major Thirteenth	|	Maj13	|	[1, 3, 5, 7, (9), (11), 13]	|
|	Major sevensharp eleventh	|	Maj7#11	|	[1, 3, 5, 7,  #11]	|
|	Major Flat Five	|	-	|	[1, 3, b5]	|

### Minor Chords
|	Chord Type	|	Symbol	|	Formula	|
|	:-----:	|	:-----:	|	:-----:	|
|	Minor	|	m	|	[1, b3, 5]	|
|	Minor added fourth	|	madd4	|	[1, b3, 4, 5]	|
|	Minor sixth	|	m6	|	[1, b3, 5, 6]	|
|	Minor seventh	|	m7	|	[1, b3, 5, b7]	|
|	Minor added ninth	|	madd9	|	[1, b3, 5, 9]	|
|	Minor six add nine	|	m6/9	|	[1, b3, 5, 6, 9]	|
|	Minor ninth	|	m9	|	[1, b3, 5, b7, 9]	|
|	Minor eleventh	|	m11	|	[1, b3, 5, b7, (9), 11]	|
|	Minor thirteenth	|	m13	|	[1, b3, 5, b7, (9), (11), 13]	|
|	Minor/Major seventh	|	m/Maj7	|	[1, b3, 5, 7]	|
|	Minor/Major ninth	|	m/Maj9	|	[1, b3, 5, 7, 9]	|
|	Minor/Major eleventh	|	m/Maj11	|	[1, b3, 5, 7, (9), 11]	|
|	Minor/Major thirteenth	|	m/Maj13	|	[1, b3, 5, 7, (9), (11), 13]	|
|	Minor seven flat fifth	|	m7-5 or ø	|	[1, b3, b5, b7]	|

### Dominant Chords
|	Chord Type	|	Symbol	|	Formula	|
|	:-----:	|	:-----:	|	:-----:	|
|	Seventh	|	7	|	[1, 3, 5, b7]	|
|	Ninth	|	9	|	[1, 3, 5, b7, 9]	|
|	Eleventh	|	11	|	[1, (3), 5, b7, (9), 11]	|
|	Thirteenth	|	13	|	[1, 3, 5, b7, (9), (11), 13]	|
|	Seven sharp five	|	7#5	|	[1, 3, #5, b7]	|
|	Seven flat five	|	7b5	|	[1, 3, b5, b7]	|
|	Seven flat ninth	|	7b9	|	[1, 3, 5, b7, b9]	|
|	Seven sharp ninth	|	7#9	|	[1, 3, 5, b7, #9]	|
|	Nine sharp five	|	9#5	|	[1, 3, #5, b7, 9]	|
|	Nine flat five	|	9b5	|	[1, 3, b5, b7, 9]	|
|	Seven sharp five sharp nine	|	7#5#9	|	[1, 3, #5, b7, #9]	|
|	Seven sharp five flat nine	|	7#5b9	|	[1, 3, #5, b7, b9]	|
|	Seven flat five sharp nine	|	7b5#9	|	[1, 3, b5, b7, #9]	|
|	Seven flat five flat nine	|	7b5b9	|	[1, 3, b5, b7, b9]	|
|	Seven sharp eleven	|	7#11	|	[1, 3, 5, b7, #11]	|



