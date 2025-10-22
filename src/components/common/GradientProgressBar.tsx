import React, { useEffect } from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
} from 'react-native-reanimated';

interface AnimatedGradientProgressBarProps {
    progress: number; // A value between 0 and 1
    height?: number;
    backgroundColor?: string;
    gradientColors?: string[];
    style?: StyleProp<ViewStyle>;
    animationDuration?: number;
}

const AnimatedGradientProgressBar: React.FC<
    AnimatedGradientProgressBarProps
> = ({
    progress,
    height = 12,
    backgroundColor = 'rgba(0, 0, 0, 0.25)',
    gradientColors = ['#C039E8', '#4A39E8'],
    style,
    animationDuration = 500,
}) => {
        const animatedWidth = useSharedValue(0);

        // Animate the width whenever the progress prop changes
        useEffect(() => {
            const clampedProgress = Math.max(0, Math.min(1, progress));
            animatedWidth.value = withTiming(clampedProgress, {
                duration: animationDuration,
                easing: Easing.inOut(Easing.quad),
            });
        }, [progress, animatedWidth, animationDuration]);

        // Create the animated style for the width
        const animatedStyle = useAnimatedStyle(() => {
            return {
                width: `${animatedWidth.value * 100}%`,
            };
        });

        const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);

        return (
            <View
                style={[
                    styles.container,
                    { height, backgroundColor, borderRadius: height / 2 },
                    style,
                ]}
            >
                <AnimatedGradient
                    colors={gradientColors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.progressFill, animatedStyle]}
                />
            </View>
        );
    };

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        width: '100%',
    },
    progressFill: {
        height: '100%',
    },
});

export default AnimatedGradientProgressBar;
