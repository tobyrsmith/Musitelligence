export const major_scale            = [2, 4, 5, 7, 9, 11, 12]
export const minor_scale            = [2, 3, 5, 7, 8, 10, 12]
export const Harmonic_Minor_scale   = [2, 3, 5, 7, 8, 11, 12]
export const Melodic_Minor_scale    = [2, 3, 5, 7, 9, 11, 12]
export const Ionian_scale           = major_scale
export const Dorian_scale           = [2, 3, 5, 7, 9, 10, 12]
export const Phrygian_scale         = [1, 3, 5, 7, 8, 10, 12]
export const Lydian_scale           = [2, 4, 6, 7, 9, 11, 12]
export const Mixolydian_scale       = [2, 4, 5, 7, 9, 10, 12]
export const Aeolian_scale          = [2, 3, 5, 7, 8, 10, 12]
export const Locrian_scale          = [1, 3, 5, 6, 8, 10, 12]
export const Major_pentatonic_scale = [2, 4, 7, 9, 12]
export const Minor_pentatonic_scale = [3, 5, 7, 10, 12]
export const Blues_scale            = [3, 5, 6, 7, 10, 12]
export const Whole_tone_scale       = [2, 4, 6, 8, 10, 12]
export const Whole_Half_Diminished  = [2, 3, 5, 6, 8, 9, 11, 12]
export const Half_Whole_Diminished  = [1, 3, 4, 6, 7, 9, 10, 12]
export const scale_intervals        = [
	"unison",
	"second",
	"third",
	"fourth",
	"fifth",
	"sixth",
	"seventh",
	"eighth",
	"nineth",
	"tenth",
	"eleventh"
]
export const diatonic_scales = {
	"Major"                : major_scale,
	"Minor"                : minor_scale,
	"harmonic Minor"       : Harmonic_Minor_scale,
	"Melodic Minor"        : Melodic_Minor_scale,
	"Ionian"               : Ionian_scale,
	"Dorian"               : Dorian_scale,
	"Phrygian"             : Phrygian_scale,
	"Lydian"               : Lydian_scale,
	"Mixolydian"           : Mixolydian_scale,
	"Aeolian"              : Aeolian_scale,
	"Locrian"              : Locrian_scale,
}

export const scales = {
	"Major"                : major_scale,
	"Minor"                : minor_scale,
	"harmonic Minor"       : Harmonic_Minor_scale,
	"Melodic Minor"        : Melodic_Minor_scale,
	"Ionian"               : Ionian_scale,
	"Dorian"               : Dorian_scale,
	"Phrygian"             : Phrygian_scale,
	"Lydian"               : Lydian_scale,
	"Mixolydian"           : Mixolydian_scale,
	"Aeolian"              : Aeolian_scale,
	"Locrian"              : Locrian_scale,
	"Major Pentatonic"     : Major_pentatonic_scale,
	"Minor Pentatonic"     : Minor_pentatonic_scale,
	"Whole Tone"           : Whole_tone_scale,
	"Whole Half Diminished": Whole_Half_Diminished,
	"Half Whole Diminished": Half_Whole_Diminished
}

export const major_chord = [4, 7]

export const circle_of_fifths  = ["C", "G", "D", "A", "E", "B", "F#"]
export const circle_of_fourths = ["C", "F", "Bb", "Eb", "Ab", "Db", "Gb"]
export const note_letters      = ["C", "D", "E", "F", "G", "A", "B"]
export const whole_tone_notes  = ["C", "D", "F", "G", "A"]
export const half_tone_notes   = ["E", "B"]
export const notes             = {
	"#": ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"],
	"b": ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"]
}
export const all_notes = ['C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#','Ab','A', 'A#', 'Bb','B']

export const note_durations = {
    'w': 1,
    'h': 1 / 2,
    'q': 1 / 4,
    'e': 1 / 8,
    's': 1 / 16,
    't': 1 / 32,
    'sf': 1 / 64
}

export const time_signature_note_types = {
    4: 1 / 4,
    8: 1 / 8,
}

export const semitone = Math.pow(2, 1 / 12)

export const octave_frequencies = {
    '0': [0, 31],
    '1': [31, 63],
    '2': [63, 127],
    '3': [127, 253],
    '4': [253, 508],
    '5': [508, 1017],
    '6': [1017, 2034],
    '7': [2034, 4068],
    '8': [4068, 8137],
    '9':[8137, 16000]
}