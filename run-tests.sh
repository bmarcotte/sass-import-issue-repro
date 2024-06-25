#!/usr/bin/env bash

LOG_DIR="logs/$(date +%Y%m%d-%H%M%S)"
RUN_LOG="${LOG_DIR}/log.txt"

NUM_RUNS="${1:-10}"

mkdir -p "${LOG_DIR}"

total_count=0
fail_count=0

for (( batch=1; batch<=NUM_RUNS; ++batch )); do
  echo "[$(date)][${batch}] Starting batch"
  for nodeVer in node16 node18; do
    for osVer in bullseye; do
      target="sassissue-build-${nodeVer}-${osVer}"
      echo "[$(date)][${batch}] Starting target ${target}"

      result=$(BUILDKIT_PROGRESS=plain docker compose run --rm "${target}" 2>&1 > "${LOG_DIR}/run-${batch}-${target}.log")
      success=$?
      when="$(date)"
      [[ $success -ne 0 ]] && status="FAIL" || status="PASS"

      total_count=$((total_count + 1))
      if [[ $success -ne 0 ]]; then
        fail_count=$((fail_count + 1))
      fi

      echo "${status} [${when}][${batch}] ${target}" >> "${RUN_LOG}"
      echo "[${when}][${batch}] ${status} target ${target}"
    done
  done
done

echo "[$(date)] All batches completed"
echo "[$(date)] Total runs: ${total_count}, failed: ${fail_count}"
