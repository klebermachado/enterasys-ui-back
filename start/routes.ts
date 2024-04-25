import router from '@adonisjs/core/services/router'
import SwitchesController from '#controllers/switches_controller'
import VlansController from '#controllers/vlans_controller'
import ArchitecturesController from '#controllers/architectures_controller'

router.get('/', [SwitchesController, 'show'])
router.get('switches/create', [SwitchesController, 'create'])
router.post('switches', [SwitchesController, 'store'])
router.get('switches', [SwitchesController, 'all'])
router.get('switches/:id', [SwitchesController, 'show'])
router.get('switches/:id/vlans', [SwitchesController, 'vlansPage'])
router.get('switches/:id/ports', [SwitchesController, 'portsPage'])
router.get('switches/:id/config', [SwitchesController, 'configPage'])
router.get('switches/:id/backup', [SwitchesController, 'backupPage'])
router.put('switches/:id/vlans', [SwitchesController, 'updateVlans'])
router.get('vlans', [VlansController, 'all'])
router.post('vlans', [VlansController, 'store'])
router.delete('vlans/:id', [VlansController, 'destroy'])

router.get('architecture', [ArchitecturesController, 'index'])
