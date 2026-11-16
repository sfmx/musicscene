import numpy as np
import wave
import struct

def generate_guitar_pluck(freq, duration, sample_rate=44100, volume=0.7):
    t = np.linspace(0, duration, int(sample_rate * duration), endpoint=False)
    # Acoustic guitar model: fundamental + 2nd, 3rd, 4th, 5th harmonics with damping
    h1 = np.sin(2 * np.pi * freq * t) * np.exp(-3.5 * t)
    h2 = 0.5 * np.sin(2 * np.pi * (freq * 2) * t) * np.exp(-5.0 * t)
    h3 = 0.25 * np.sin(2 * np.pi * (freq * 3) * t) * np.exp(-7.0 * t)
    h4 = 0.12 * np.sin(2 * np.pi * (freq * 4) * t) * np.exp(-9.0 * t)
    
    # Pluck transient (initial sharp pick attack)
    noise_env = np.exp(-60.0 * t)
    noise = (np.random.rand(len(t)) * 2 - 1) * 0.15 * noise_env
    
    signal = (h1 + h2 + h3 + h4 + noise) * volume
    return signal

def generate_chime(f1, f2, duration, sample_rate=44100, volume=0.5):
    t = np.linspace(0, duration, int(sample_rate * duration), endpoint=False)
    c1 = np.sin(2 * np.pi * f1 * t) * np.exp(-4.0 * t)
    c2 = np.sin(2 * np.pi * f2 * t) * np.exp(-4.5 * t)
    return (c1 + c2) * volume * 0.5

def main():
    sample_rate = 44100
    total_duration = 35.0
    total_samples = int(sample_rate * total_duration)
    
    # 2-channel stereo audio
    left = np.zeros(total_samples)
    right = np.zeros(total_samples)
    
    def add_sound(sound, start_time, pan=0.0):
        # pan: -1.0 (left) to 1.0 (right)
        start_idx = int(start_time * sample_rate)
        end_idx = min(start_idx + len(sound), total_samples)
        sound_slice = sound[:end_idx - start_idx]
        
        l_gain = 0.5 * (1.0 - pan)
        r_gain = 0.5 * (1.0 + pan)
        
        left[start_idx:end_idx] += sound_slice * l_gain
        right[start_idx:end_idx] += sound_slice * r_gain

    # 1. Intro ambient sparkle / chord (0.5s - 3.5s)
    t_intro = np.linspace(0, 3.0, int(sample_rate * 3.0), endpoint=False)
    intro_chime = (
        0.25 * np.sin(2 * np.pi * 523.25 * t_intro) * np.exp(-1.5 * t_intro) +
        0.25 * np.sin(2 * np.pi * 659.25 * t_intro) * np.exp(-1.5 * t_intro) +
        0.25 * np.sin(2 * np.pi * 783.99 * t_intro) * np.exp(-1.5 * t_intro) +
        0.25 * np.sin(2 * np.pi * 1046.50 * t_intro) * np.exp(-1.8 * t_intro)
    )
    add_sound(intro_chime * 0.4, 0.5, pan=0.0)

    # 2. UI mode switch tick (4.5s)
    click_t = np.linspace(0, 0.05, int(sample_rate * 0.05), endpoint=False)
    click = np.sin(2 * np.pi * 1800 * click_t) * np.exp(-100 * click_t) * 0.2
    add_sound(click, 4.5, pan=0.3)

    # 3. Note 1: Low E2 Pluck (9.5s)
    e2_pluck = generate_guitar_pluck(82.41, 3.0, volume=0.85)
    add_sound(e2_pluck, 9.5, pan=-0.1)

    # Success Chime 1 (10.7s)
    chime1 = generate_chime(1046.5, 1318.5, 1.8, volume=0.5)
    add_sound(chime1, 10.7, pan=0.2)

    # 4. Note 2: Middle C3 Pluck (15.2s)
    c3_pluck = generate_guitar_pluck(130.81, 2.5, volume=0.8)
    add_sound(c3_pluck, 15.2, pan=-0.05)

    # Success Chime 2 (16.4s)
    chime2 = generate_chime(1174.6, 1396.9, 1.8, volume=0.5)
    add_sound(chime2, 16.4, pan=0.2)

    # 5. Note 3: Open G3 Pluck (20.5s)
    g3_pluck = generate_guitar_pluck(196.00, 2.5, volume=0.8)
    add_sound(g3_pluck, 20.5, pan=0.0)

    # Success Chime 3 (21.6s)
    chime3 = generate_chime(1318.5, 1567.9, 1.8, volume=0.55)
    add_sound(chime3, 21.6, pan=0.2)

    # 6. Note 4: Octave Warning Note - High E4 Pluck (25.4s)
    e4_wrong = generate_guitar_pluck(329.63, 1.2, volume=0.7)
    add_sound(e4_wrong, 25.4, pan=-0.2)
    
    # Soft warning indicator tick (25.6s)
    alert_t = np.linspace(0, 0.15, int(sample_rate * 0.15), endpoint=False)
    alert = np.sin(2 * np.pi * 580 * alert_t) * np.exp(-20 * alert_t) * 0.35
    add_sound(alert, 25.6, pan=-0.2)

    # Note 4 Corrected: D-string E3 Pluck (27.0s)
    e3_correct = generate_guitar_pluck(164.81, 2.2, volume=0.8)
    add_sound(e3_correct, 27.0, pan=0.0)

    # Success Chime 4 (28.2s)
    chime4 = generate_chime(1318.5, 1975.5, 2.0, volume=0.6)
    add_sound(chime4, 28.2, pan=0.2)

    # 7. Outro Full Acoustic Strum (30.0s - 34.5s)
    # Strum E major chord: E2, B2, E3, G#3, B3, E4
    chord_freqs = [82.41, 123.47, 164.81, 207.65, 246.94, 329.63]
    for idx, f in enumerate(chord_freqs):
        offset = 30.0 + idx * 0.025  # subtle strum roll
        strum_pluck = generate_guitar_pluck(f, 4.5, volume=0.45)
        pan_val = -0.3 + (idx / 5.0) * 0.6
        add_sound(strum_pluck, offset, pan=pan_val)

    # Master Limiter / Normalizer
    max_val = max(np.max(np.abs(left)), np.max(np.abs(right)))
    if max_val > 0.95:
        left = (left / max_val) * 0.95
        right = (right / max_val) * 0.95

    # Interleave to 16-bit PCM
    left_int = (left * 32767).astype(np.int16)
    right_int = (right * 32767).astype(np.int16)
    
    stereo_interleaved = np.empty(total_samples * 2, dtype=np.int16)
    stereo_interleaved[0::2] = left_int
    stereo_interleaved[1::2] = right_int

    output_path = 'scripts/demo_audio.wav'
    with wave.open(output_path, 'w') as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        wf.writeframes(stereo_interleaved.tobytes())

    print(f"Audio generated successfully: {output_path} ({total_duration}s)")

if __name__ == '__main__':
    main()
