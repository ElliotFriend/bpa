<script>
    export let steps = []
    export let currentActive = 1

    let stepMarkers

    export const handleStep = (stepIncrement) => {
        stepMarkers = document.querySelectorAll('.step')
        if (stepIncrement == 1) {
            currentActive++

            if (currentActive > steps.length) {
                currentActive = steps.length
            }
        } else {
            currentActive--

            if (currentActive < 1) {
                currentActive = 1
            }
        }

        update()
    }

    const update = () => {
        stepMarkers.forEach((step, i) => {
            if (i < currentActive) {
                step.classList.add('step-primary')
            } else {
                step.classList.remove('step-primary')
            }
        })
    }
</script>

<div class="not-prose">
    <ul class="steps w-full" bind:this={stepMarkers}>
        {#each steps as step, i}
            <li class="step {i === 0 ? 'step-primary' : ''}">{step}</li>
        {/each}
    </ul>
</div>
